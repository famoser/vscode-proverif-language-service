import {integer, Position} from "vscode-languageserver";
import {TokenStream} from "antlr4ts/TokenStream";
import {Token} from "antlr4ts";
import {ProverifParser} from "./parser/ProverifParser";

export const getPreviousContextTokens = (tokens: TokenStream, position: Position, max: integer = 5): Token[] | undefined => {
    let currentContextTokenIndex = 0;
    for (let i = 0; i < tokens.size; i++) {
        const token = tokens.get(i); // lookup seems to be O(1)
        currentContextTokenIndex = i;

        if (token.line >= position.line + 1 && token.charPositionInLine >= position.character) {
             break;
        }
    }

    const contextTokens: Token[] = [];
    for (let i = currentContextTokenIndex; i >= 0 && contextTokens.length < max; i--) {
        const candidate = tokens.get(i);

        // ignore whitespace and last token
        if (candidate.type !== ProverifParser.WS && candidate.type !== -1) {
            contextTokens.unshift(candidate);
        }
    }

    return contextTokens;
};
