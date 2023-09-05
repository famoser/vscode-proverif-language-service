import {Diagnostic, DiagnosticSeverity, Range} from "vscode-languageserver/node";
import {ExecException} from "child_process";
import {exec} from "child_process";
import {asTempFile} from "../utils/files";
import {LibraryDependencyToken, libraryDependencyTokenToRange} from "./parse_library_dependencies";
import {createInfoMessage, createSingleErrorMessage, Message} from "../utils/log";
import {fileURLToPath} from "url";
import {TextDocumentIdentifier} from "vscode-languageserver";

export type InvokeProverifResult = {
    libraryMode: boolean
    proverifBinary: string
    invocation: string
    diagnostics?: Diagnostic[]
    messages?: Message[]
}

const getRangeFromPositionString = (positionString: string): Range | undefined => {
    //
    /*
    Some error occurred; attempt to process syntax errors. These are of the form:

    File "hello_world.pv", line 12, character 9:
    Error: Variable, function, name, or predicate d not declared.

    or

    File "hello_world.pv", line 3, characters 9-14:
    Error: type channe not declared.

    or

    File "hello_world.pv", line 3, character 9 - line 5, character 5:
    Error: type channe not declared.

    see proverif/src/parsing_helper.ml
    */
    const s2ns = (numberString: string): number => {
        return Number(numberString) - 1;
    };
    const s2ne = (numberString: string): number => {
        return Number(numberString);
    };

    const matchMultiline = positionString.match(/.+line ([0-9]+), character ([0-9]+) - line ([0-9]+), character ([0-9]+)/);
    if (matchMultiline) {
        return Range.create(s2ns(matchMultiline[1]), s2ns(matchMultiline[2]), s2ne(matchMultiline[3]), s2ne(matchMultiline[4]));
    }

    const matchMultiCharacter = positionString.match(/.+line ([0-9]+), characters ([0-9]+)-([0-9]+)/);
    if (matchMultiCharacter) {
        return Range.create(s2ns(matchMultiCharacter[1]), s2ns(matchMultiCharacter[2]), s2ns(matchMultiCharacter[1]), s2ne(matchMultiCharacter[3]));
    }

    const matchSingleCharacter = positionString.match(/.+line ([0-9]+), character ([0-9]+)/);
    if (matchSingleCharacter) {
        return Range.create(s2ns(matchSingleCharacter[1]), s2ns(matchSingleCharacter[2]), s2ns(matchSingleCharacter[1]), s2ns(matchSingleCharacter[2]));
    }

    return undefined;
};

const parseDiagnostics = (content: string, selfIsLibrary: boolean, libraryDependencyTokens: LibraryDependencyToken[], error: ExecException | null, stdout: string): {
    messages?: Message[]
    diagnostics?: Diagnostic[]
} => {
    if (!error) {
        return {diagnostics: []};
    }

    // syntax errors in stdout
    const lines = stdout.split(/\n/);
    while (lines.length > 0 && !lines[0].startsWith('File "')) {
        lines.shift();
    }
    if (lines.length < 2) {
        return createSingleErrorMessage('Unknown error: ' + error);
    }

    const positionLine = lines[0];
    const errorLine = lines[1];
    if (selfIsLibrary && errorLine === 'Error: Lemma not used because there is no matching query.') {
        const message = createInfoMessage('Ignore error message which is not relevant in library: ' + errorLine);
        return {messages: [message], diagnostics: []};
    }

    // check if error in own file or dependency
    const matchFile = positionLine.match(/File "(.+)"/);
    if (matchFile) {
        const matchingDependencies = libraryDependencyTokens.filter(token => fileURLToPath(token.uri).endsWith(matchFile[1]));
        const diagnostics = [];
        for (const matchingDependency of matchingDependencies) {
            const range = libraryDependencyTokenToRange(content, matchingDependency);
            diagnostics.push({
                severity: DiagnosticSeverity.Warning,
                range,
                message: errorLine,
                source: 'ProVerif Language Service'
            });
        }

        if (diagnostics.length) {
            return {diagnostics};
        }
    }

    const range = getRangeFromPositionString(positionLine);
    if (!range) {
        return createSingleErrorMessage('Failed to parse error location: ' + positionLine);
    }

    const severity = errorLine.startsWith("Warning:") ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error;

    const parsingError = {severity, range, message: errorLine, source: 'ProVerif'};
    return {diagnostics: [parsingError]};
};

const LIB_ARGUMENT_PREFIX = '-lib';
export const invokeProverif = async (documentIdentifier: TextDocumentIdentifier, content: string, selfIsLibrary: boolean, libraryDependencyTokens: LibraryDependencyToken[], proverifBinary: string): Promise<InvokeProverifResult> => {
    let appendFileEnding: string | undefined = undefined;
    if (selfIsLibrary) {
        content += '\nprocess\n\t0';
        appendFileEnding = '.pv';
    }

    const path = fileURLToPath(documentIdentifier.uri);
    const invocationResult = await asTempFile<{
        invocation: string,
        messages?: Message[],
        diagnostics?: Diagnostic[]
    }>(path, content, appendFileEnding, tempFilePath => new Promise((resolve) => {
        const libs = new Set(libraryDependencyTokens.filter(token => token.exists).map(token => fileURLToPath(token.uri)));
        const libArguments = Array.from(libs).map(lib => `${LIB_ARGUMENT_PREFIX} "${lib}"`).join(" ");
        const invocation = `${proverifBinary} ${libArguments} "${tempFilePath}"`;

        exec(invocation, {timeout: 1000}, (error, stdout) => {
            const result = parseDiagnostics(content, selfIsLibrary, libraryDependencyTokens, error, stdout);
            resolve({ invocation, ...result });
        });
    }));

    return {
        selfIsLibrary: selfIsLibrary,
        proverifBinary,
        ...invocationResult,
    };
};

