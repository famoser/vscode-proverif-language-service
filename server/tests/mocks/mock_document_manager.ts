import {Position, Range, TextDocumentIdentifier} from "vscode-languageserver";
import {TextDocument} from "vscode-languageserver-textdocument";
import {DocumentManagerInterface, ParseResult} from "../../src/document_manager";
import {parseProverif} from "../../src/tasks/parse_proverif";
import {assert} from "chai";
import {createSymbolTable} from "../../src/tasks/create_symbol_table";
import {LibraryDependencyToken} from "../../src/tasks/parse_library_dependencies";

export class MockDocumentManager implements DocumentManagerInterface {

    public markSettingsChanged(): Promise<void> {
        return;
    }

    public closeDocument(identifier: TextDocumentIdentifier): void {
        return;
    }

    public markDocumentContentChanged(document: TextDocument): Promise<void> {
        return;
    }

    public markFilesystemDocumentContentChanged(document: TextDocument): Promise<void> {
        return;
    }

    private parseResults: Map<string, ParseResult> = new Map();
    public parse(uri: string, code: string, dependencyUri?: string, dependencyRange?: Range) {
        const {parser, parserTree} = parseProverif(code, uri.endsWith('.pvl'));
        assert.isUndefined(parserTree.exception);

        const symbolTable = createSymbolTable(parserTree).symbolTable;

        const dependencyTokens: LibraryDependencyToken[] = [];
        if (dependencyUri) {
            const zeroPosition: Position = { line: 0, character: 0 };
            const zeroRange: Range = { start: zeroPosition, end: zeroPosition};
            dependencyTokens.push({uri: dependencyUri, range: dependencyRange ?? zeroRange, exists: true});
        }

        const parseResult = {identifier: {uri}, parser, parserTree, symbolTable, dependencyTokens: dependencyTokens};

        this.parseResults.set(uri, parseResult);
    }

    public async getParseResult(identifier: TextDocumentIdentifier): Promise<ParseResult | undefined> {
        return this.parseResults.get(identifier.uri);
    }

}