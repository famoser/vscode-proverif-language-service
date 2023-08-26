// Generated from grammar/ProverifLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ProverifLexer extends Lexer {
	public static readonly DelimitedComment = 1;
	public static readonly WS = 2;
	public static readonly DOT = 3;
	public static readonly COLON = 4;
	public static readonly SEMICOLON = 5;
	public static readonly COMMA = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LSQUARE = 9;
	public static readonly RSQUARE = 10;
	public static readonly ADD = 11;
	public static readonly SUB = 12;
	public static readonly STAR = 13;
	public static readonly HASH = 14;
	public static readonly AT = 15;
	public static readonly ARROW = 16;
	public static readonly CONJUNCTION = 17;
	public static readonly DISJUNCTION = 18;
	public static readonly LESS = 19;
	public static readonly GREATER = 20;
	public static readonly LESS_EQUAL = 21;
	public static readonly GREATER_EQUAL = 22;
	public static readonly NOT_EQ = 23;
	public static readonly EQ = 24;
	public static readonly FREE = 25;
	public static readonly CHANNEL = 26;
	public static readonly PROCESS = 27;
	public static readonly OUT = 28;
	public static readonly IN = 29;
	public static readonly Number = 30;
	public static readonly BooleanLiteral = 31;
	public static readonly Identifier = 32;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DelimitedComment", "WS", "DOT", "COLON", "SEMICOLON", "COMMA", "LPAREN", 
		"RPAREN", "LSQUARE", "RSQUARE", "ADD", "SUB", "STAR", "HASH", "AT", "ARROW", 
		"CONJUNCTION", "DISJUNCTION", "LESS", "GREATER", "LESS_EQUAL", "GREATER_EQUAL", 
		"NOT_EQ", "EQ", "FREE", "CHANNEL", "PROCESS", "OUT", "IN", "Number", "BooleanLiteral", 
		"Identifier", "Digit", "Letter", "SpecialCharacter", "Latin1AdditionalLetters",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'.'", "':'", "';'", "','", "'('", "')'", 
		"'['", "']'", "'+'", "'-'", "'*'", "'#'", "'@'", "'==>'", "'&&'", "'||'", 
		"'<'", "'>'", "'<='", "'>='", "'<>'", "'='", "'free'", "'channel'", "'process'", 
		"'out'", "'in'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DelimitedComment", "WS", "DOT", "COLON", "SEMICOLON", "COMMA", 
		"LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "ADD", "SUB", "STAR", "HASH", 
		"AT", "ARROW", "CONJUNCTION", "DISJUNCTION", "LESS", "GREATER", "LESS_EQUAL", 
		"GREATER_EQUAL", "NOT_EQ", "EQ", "FREE", "CHANNEL", "PROCESS", "OUT", 
		"IN", "Number", "BooleanLiteral", "Identifier",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProverifLexer._LITERAL_NAMES, ProverifLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProverifLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ProverifLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ProverifLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProverifLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProverifLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ProverifLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ProverifLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\"\xCF\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02Q" +
		"\n\x02\f\x02\x0E\x02T\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x06" +
		"\x1F\xAF\n\x1F\r\x1F\x0E\x1F\xB0\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x05 \xBC\n \x03!\x03!\x03!\x03!\x03!\x07!\xC3\n!\f!\x0E!\xC6\v" +
		"!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03R\x02\x02&\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02\x02E\x02\x02G\x02\x02I\x02\x02\x03\x02\x07\x05\x02" +
		"\v\f\x0E\x0F\"\"\x03\x022;\x04\x02C\\c|\x04\x02))aa\x05\x02\xC2\xD8\xDA" +
		"\xF8\xFA\u0101\x02\xD2\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
		"3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02" +
		"\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02A\x03\x02\x02\x02\x03K\x03\x02\x02\x02\x05Z\x03\x02\x02\x02\x07^\x03" +
		"\x02\x02\x02\t`\x03\x02\x02\x02\vb\x03\x02\x02\x02\rd\x03\x02\x02\x02" +
		"\x0Ff\x03\x02\x02\x02\x11h\x03\x02\x02\x02\x13j\x03\x02\x02\x02\x15l\x03" +
		"\x02\x02\x02\x17n\x03\x02\x02\x02\x19p\x03\x02\x02\x02\x1Br\x03\x02\x02" +
		"\x02\x1Dt\x03\x02\x02\x02\x1Fv\x03\x02\x02\x02!x\x03\x02\x02\x02#|\x03" +
		"\x02\x02\x02%\x7F\x03\x02\x02\x02\'\x82\x03\x02\x02\x02)\x84\x03\x02\x02" +
		"\x02+\x86\x03\x02\x02\x02-\x89\x03\x02\x02\x02/\x8C\x03\x02\x02\x021\x8F" +
		"\x03\x02\x02\x023\x91\x03\x02\x02\x025\x96\x03\x02\x02\x027\x9E\x03\x02" +
		"\x02\x029\xA6\x03\x02\x02\x02;\xAA\x03\x02\x02\x02=\xAE\x03\x02\x02\x02" +
		"?\xBB\x03\x02\x02\x02A\xBD\x03\x02\x02\x02C\xC7\x03\x02\x02\x02E\xC9\x03" +
		"\x02\x02\x02G\xCB\x03\x02\x02\x02I\xCD\x03\x02\x02\x02KL\x07*\x02\x02" +
		"LM\x07,\x02\x02MR\x03\x02\x02\x02NQ\x05\x03\x02\x02OQ\v\x02\x02\x02PN" +
		"\x03\x02\x02\x02PO\x03\x02\x02\x02QT\x03\x02\x02\x02RS\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02UV\x07,\x02\x02" +
		"VW\x07+\x02\x02WX\x03\x02\x02\x02XY\b\x02\x02\x02Y\x04\x03\x02\x02\x02" +
		"Z[\t\x02\x02\x02[\\\x03\x02\x02\x02\\]\b\x03\x02\x02]\x06\x03\x02\x02" +
		"\x02^_\x070\x02\x02_\b\x03\x02\x02\x02`a\x07<\x02\x02a\n\x03\x02\x02\x02" +
		"bc\x07=\x02\x02c\f\x03\x02\x02\x02de\x07.\x02\x02e\x0E\x03\x02\x02\x02" +
		"fg\x07*\x02\x02g\x10\x03\x02\x02\x02hi\x07+\x02\x02i\x12\x03\x02\x02\x02" +
		"jk\x07]\x02\x02k\x14\x03\x02\x02\x02lm\x07_\x02\x02m\x16\x03\x02\x02\x02" +
		"no\x07-\x02\x02o\x18\x03\x02\x02\x02pq\x07/\x02\x02q\x1A\x03\x02\x02\x02" +
		"rs\x07,\x02\x02s\x1C\x03\x02\x02\x02tu\x07%\x02\x02u\x1E\x03\x02\x02\x02" +
		"vw\x07B\x02\x02w \x03\x02\x02\x02xy\x07?\x02\x02yz\x07?\x02\x02z{\x07" +
		"@\x02\x02{\"\x03\x02\x02\x02|}\x07(\x02\x02}~\x07(\x02\x02~$\x03\x02\x02" +
		"\x02\x7F\x80\x07~\x02\x02\x80\x81\x07~\x02\x02\x81&\x03\x02\x02\x02\x82" +
		"\x83\x07>\x02\x02\x83(\x03\x02\x02\x02\x84\x85\x07@\x02\x02\x85*\x03\x02" +
		"\x02\x02\x86\x87\x07>\x02\x02\x87\x88\x07?\x02\x02\x88,\x03\x02\x02\x02" +
		"\x89\x8A\x07@\x02\x02\x8A\x8B\x07?\x02\x02\x8B.\x03\x02\x02\x02\x8C\x8D" +
		"\x07>\x02\x02\x8D\x8E\x07@\x02\x02\x8E0\x03\x02\x02\x02\x8F\x90\x07?\x02" +
		"\x02\x902\x03\x02\x02\x02\x91\x92\x07h\x02\x02\x92\x93\x07t\x02\x02\x93" +
		"\x94\x07g\x02\x02\x94\x95\x07g\x02\x02\x954\x03\x02\x02\x02\x96\x97\x07" +
		"e\x02\x02\x97\x98\x07j\x02\x02\x98\x99\x07c\x02\x02\x99\x9A\x07p\x02\x02" +
		"\x9A\x9B\x07p\x02\x02\x9B\x9C\x07g\x02\x02\x9C\x9D\x07n\x02\x02\x9D6\x03" +
		"\x02\x02\x02\x9E\x9F\x07r\x02\x02\x9F\xA0\x07t\x02\x02\xA0\xA1\x07q\x02" +
		"\x02\xA1\xA2\x07e\x02\x02\xA2\xA3\x07g\x02\x02\xA3\xA4\x07u\x02\x02\xA4" +
		"\xA5\x07u\x02\x02\xA58\x03\x02\x02\x02\xA6\xA7\x07q\x02\x02\xA7\xA8\x07" +
		"w\x02\x02\xA8\xA9\x07v\x02\x02\xA9:\x03\x02\x02\x02\xAA\xAB\x07k\x02\x02" +
		"\xAB\xAC\x07p\x02\x02\xAC<\x03\x02\x02\x02\xAD\xAF\x05C\"\x02\xAE\xAD" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1" +
		"\x03\x02\x02\x02\xB1>\x03\x02\x02\x02\xB2\xB3\x07v\x02\x02\xB3\xB4\x07" +
		"t\x02\x02\xB4\xB5\x07w\x02\x02\xB5\xBC\x07g\x02\x02\xB6\xB7\x07h\x02\x02" +
		"\xB7\xB8\x07c\x02\x02\xB8\xB9\x07n\x02\x02\xB9\xBA\x07u\x02\x02\xBA\xBC" +
		"\x07g\x02\x02\xBB\xB2\x03\x02\x02\x02\xBB\xB6\x03\x02\x02\x02\xBC@\x03" +
		"\x02\x02\x02\xBD\xC4\x05E#\x02\xBE\xC3\x05E#\x02\xBF\xC3\x05C\"\x02\xC0" +
		"\xC3\x05G$\x02\xC1\xC3\x05I%\x02\xC2\xBE\x03\x02\x02\x02\xC2\xBF\x03\x02" +
		"\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1\x03\x02\x02\x02\xC3\xC6\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5B\x03\x02" +
		"\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xC8\t\x03\x02\x02\xC8D\x03\x02\x02" +
		"\x02\xC9\xCA\t\x04\x02\x02\xCAF\x03\x02\x02\x02\xCB\xCC\t\x05\x02\x02" +
		"\xCCH\x03\x02\x02\x02\xCD\xCE\t\x06\x02\x02\xCEJ\x03\x02\x02\x02\t\x02" +
		"PR\xB0\xBB\xC2\xC4\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProverifLexer.__ATN) {
			ProverifLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProverifLexer._serializedATN));
		}

		return ProverifLexer.__ATN;
	}

}

