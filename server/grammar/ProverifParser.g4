// generated by pitparser-transpile-g4.py
// DANGER: THIS GRAMMAR IS NOT 100% ACCURATELY TRANSPILED. But sufficiently to make this language server work.
parser grammar ProverifParser;
options { tokenVocab = ProverifLexer; }

lib
    : TYPE IDENT options_ DOT lib
    | FUN IDENT LPAREN typeidseq RPAREN COLON typeid options_ DOT lib
    | FUN IDENT LPAREN typeidseq RPAREN COLON typeid REDUCTION treducmayfail options_ DOT lib
    | REDUCTION treduc options_ DOT lib
    | CONST neidentseq COLON typeid options_ DOT lib
    | EQUATION eqlist options_ DOT lib
    | EVENT IDENT options_ DOT lib
    | EVENT IDENT LPAREN typeidseq RPAREN options_ DOT lib
    | PREDICATE IDENT LPAREN typeidseq RPAREN options_ DOT lib
    | PREDICATE IDENT options_ DOT lib
    | TABLE IDENT LPAREN typeidseq RPAREN DOT lib
    | LET IDENT EQUAL tprocess DOT lib
    | LET IDENT LPAREN mayfailvartypeseq RPAREN EQUAL tprocess DOT lib
    | LETFUN IDENT EQUAL pterm DOT lib
    | LETFUN IDENT LPAREN mayfailvartypeseq RPAREN EQUAL pterm DOT lib
    | SET IDENT EQUAL settings DOT lib
    | NOUNIF nevartype SEMI tfnebindingseq nounif_value options_ DOT lib
    | NOUNIF tfnebindingseq nounif_value options_ DOT lib
    | SELECT nevartype SEMI tfnebindingseq select_value options_ DOT lib
    | SELECT tfnebindingseq select_value options_ DOT lib
    | QUERY nevartype SEMI tqueryseq options_ DOT lib
    | QUERY tqueryseq options_ DOT lib
    | NONINTERF nevartype SEMI niseq DOT lib
    | NONINTERF niseq DOT lib
    | WEAKSECRET IDENT DOT lib
    | NOT nevartype SEMI gterm DOT lib
    | NOT gterm DOT lib
    | PARAM neidentseq options_ DOT lib
    | PROBA IDENT probaargs options_ DOT lib
    | LETPROBA IDENT letprobaargs EQUAL probaf DOT lib
    | PROOF LBRACE proof RBRACE lib
    | IMPLEMENTATION impllist DOT lib
    | ELIMTRUE nemayfailvartypeseq SEMI term DOT lib
    | ELIMTRUE term DOT lib
    | CHANNEL neidentseq DOT lib
    | FREE neidentseq COLON typeid options_ DOT lib
    | CLAUSES tclauses lib
    | DEFINE IDENT LPAREN typeidseq RPAREN LBRACE lib RBRACE lib
    | EXPAND IDENT LPAREN typeidseq RPAREN DOT lib
    | lemma nevartype SEMI tlemmaseq options_ DOT lib
    | lemma tlemmaseq options_ DOT lib
    | 
    ;

settings
    : IDENT
    | STRING
    | INT
    | INT MINUS INT
    ;

lemma
    : LEMMA
    | AXIOM
    | RESTRICTION
    ;

all
    : lib PROCESS tprocess EOF
    | lib EQUIVALENCE tprocess tprocess EOF
    ;

prooftoken
    : IDENT
    | STRING
    | INT
    | STAR
    | DOT
    | SET
    | INSERT
    | EQUAL
    | COMMA
    | LPAREN
    | RPAREN
    ;

proofcommand
    : prooftoken
    | prooftoken proofcommand
    ;

proof
    : proofcommand
    | proofcommand SEMI proof
    ;

impllist
    : impl
    | impl SEMI impllist
    ;

impl
    : TYPE IDENT EQUAL cvtypeid typeoptions
    | FUN IDENT EQUAL STRING functionoptions
    | TABLE IDENT EQUAL STRING
    | CONST IDENT EQUAL STRING
    ;

cvtypeid
    : INT
    | STRING
    ;

stringlistne
    : STRING
    | STRING COMMA stringlistne
    ;

typeopt
    : IDENT EQUAL stringlistne
    | PREDICATE EQUAL stringlistne /* Needed because "pred" is a keyword in ProVerif and CryptoVerif uses it here as identifier */
    ;

typeoptlist
    : typeopt
    | typeopt SEMI typeoptlist
    ;

typeoptions
    : LBRACKET typeoptlist RBRACKET
    | 
    ;

funopt: IDENT EQUAL STRING;

funoptlist
    : funopt
    | funopt SEMI funoptlist
    ;

functionoptions
    : LBRACKET funoptlist RBRACKET
    | 
    ;

probaargs
    : 
    | LPAREN dimlist RPAREN
    ;

dimlist
    : 
    | nedimlist
    ;

nedimlist
    : dimext
    | dimext COMMA nedimlist
    ;

dimext: dim;

dim
    : IDENT poweropt
    | dim STAR /*MUL*/ dim
    | dim SLASH /*DIV*/ dim
    ;

poweropt
    : 
    | POWER INT
    | POWER MINUS INT
    ;

letprobaargs
    : 
    | LPAREN probaarglist RPAREN
    ;

probaarglist
    : 
    | neprobaarglist
    ;

neprobaarglist
    : vardim
    | vardim COMMA neprobaarglist
    ;

vardim: neidentseq COLON dimext;

probaf
    : LPAREN probaflist RPAREN
    | MINUS probaf
    | probaf PLUS /*ADD*/ probaf
    | probaf MINUS /*SUB*/ probaf
    | probaf STAR /*MUL*/ probaf
    | probaf SLASH /*DIV*/ probaf
    | probaf POWER INT
    | probaf POWER MINUS /*SUB*/ INT
    | IDENT LPAREN probaflist RPAREN
    | IDENT /*TIME*/ LPAREN LET IDENT probaflistopt RPAREN
    | IDENT /*TIME*/ LPAREN EQUAL IDENT probaflistopt RPAREN
    | IDENT /*TIME*/ LPAREN LET LPAREN identlist RPAREN probaflistopt RPAREN
    | IDENT /*TIME*/ LPAREN OUT IDENT probaflistopt RPAREN
    | IDENT /*TIME*/ LPAREN OUT LBRACKET neidentseq RBRACKET IDENT probaflistopt RPAREN
    | IDENT /*TIME*/ LPAREN IN INT RPAREN
    | OPTIMIF probaoptimcond THEN probaf ELSE probaf
    | IDENT
    | COUNT IDENT
    | BAR IDENT BAR
    | IDENT /*TIME*/ LPAREN REPL RPAREN
    | IDENT /*TIME*/ LPAREN FOREACH RPAREN
    | IDENT /*TIME*/ LPAREN LBRACKET INT RBRACKET RPAREN
    | IDENT /*TIME*/ LPAREN WEDGE RPAREN
    | IDENT /*TIME*/ LPAREN OR RPAREN
    | IDENT /*TIME*/ LPAREN NEW IDENT RPAREN
    | IDENT /*TIME*/ LPAREN RANDOM IDENT RPAREN
    | IDENT /*TIME*/ LPAREN IF RPAREN
    | IDENT /*TIME*/ LPAREN IDENT/*FIND*/ INT RPAREN
    | INT
    | FLOAT
    ;

identlist
    : 
    | neidentseq
    ;

probaoptimcond
    : LPAREN probaoptimcond RPAREN
    | ISCST LPAREN probaf RPAREN
    | probaf EQUAL probaf
    | probaf LEQ probaf
    | probaf GEQ probaf
    | probaf LESS probaf
    | probaf GREATER probaf
    | probaoptimcond WEDGE probaoptimcond
    | probaoptimcond OR probaoptimcond
    | IDENT LPAREN probaoptimcond RPAREN
    ;

probaflistopt
    : COMMA probaflist
    | 
    ;

probaflist
    : probaf
    | probaf COMMA probaflist
    ;

options_
    : LBRACKET optionseq RBRACKET
    | 
    ;

singleoption
    : IDENT
    | IDENT EQUAL IDENT
    | IDENT EQUAL LBRACE neidentseq RBRACE
    ;

optionseq
    : singleoption COMMA optionseq
    | singleoption
    ;

neidentseq
    : IDENT COMMA neidentseq
    | IDENT
    ;

newarg
    : 
    | LBRACKET RBRACKET
    | LBRACKET neidentseq RBRACKET
    ;

onevartype
    : IDENT COMMA neidentseq COLON typeid
    | IDENT COLON typeid
    ;

nevartype
    : onevartype COMMA nevartype
    | onevartype
    ;

forallvartype
    : FORALL nevartype SEMI
    | 
    ;

typeid
    : IDENT
    | CHANNEL
    ;

typeidseq
    : netypeidseq
    | 
    ;

netypeidseq
    : typeid COMMA netypeidseq
    | typeid
    ;

term
    : FAIL
    | IDENT LPAREN termseq RPAREN
    | PROJECTION LPAREN term RPAREN
    | CHOICE LBRACKET term COMMA term RBRACKET
    | IDENT
    | INT
    | term MINUS INT
    | term PLUS INT
    | INT PLUS term
    | term EQUAL term
    | term DIFF term
    | NOT LPAREN term RPAREN
    | term OR term
    | term WEDGE term
    | LPAREN termseq RPAREN
    ;

netermseq
    : term COMMA netermseq
    | term
    ;

termseq
    : netermseq
    | 
    ;

niseq
    : IDENT AMONG LPAREN netermseq RPAREN COMMA niseq
    | IDENT AMONG LPAREN netermseq RPAREN
    | IDENT COMMA niseq
    | IDENT
    ;

opt_publivars_ror
    : 
    | FOR LBRACE PUBLICVARS neidentseq RBRACE
    | FOR LBRACE SECRET IDENT optpublicvars LBRACKET IDENT RBRACKET RBRACE
    ;

tlemmaseq
    : gterm opt_publivars_ror SEMI tlemmaseq
    | gterm opt_publivars_ror
    ;

tqueryseq
    : tquery SEMI tqueryseq
    | tquery
    ;

tquery
    : gterm optpublicvars
    | SECRET IDENT optpublicvars options_
    | PUTBEGIN EVENT COLON neidentseq
    | PUTBEGIN INJEVENT COLON neidentseq
    ;

optpublicvars
    : 
    | PUBLICVARS neidentseq
    ;

optatident
    : 
    | AT IDENT
    ;

gterm
    : IDENT LPAREN gtermseq RPAREN optatident
    | IDENT
    | INT
    | gterm PLUS INT
    | INT PLUS gterm
    | gterm LEQ gterm
    | gterm GEQ gterm
    | gterm LESS gterm
    | gterm GREATER gterm
    | IDENT LPAREN gtermseq RPAREN PHASE INT optatident
    | TABLE LPAREN gterm RPAREN PHASE INT optatident
    | gterm EQUAL gterm
    | gterm DIFF gterm
    | NOT LPAREN gterm RPAREN
    | gterm OR gterm
    | gterm WEDGE gterm
    | CHOICE LBRACKET gterm COMMA gterm RBRACKET
    | EVENT LPAREN gtermseq RPAREN optatident
    | INJEVENT LPAREN gtermseq RPAREN optatident
    | TABLE LPAREN gterm RPAREN optatident
    | gterm BEFORE gterm
    | LPAREN gtermseq RPAREN
    | NEW IDENT LBRACKET bindingseq RBRACKET
    | NEW IDENT
    | LET IDENT EQUAL gterm IN gterm
    | IDENT LEFTARROW gterm SEMI gterm
    ;

negtermseq
    : gterm COMMA negtermseq
    | gterm
    ;

gtermseq
    : negtermseq
    | 
    ;

nesbindingseq
    : REPL INT EQUAL gterm SEMI nesbindingseq
    | REPL INT EQUAL gterm
    | IDENT EQUAL gterm SEMI nesbindingseq
    | IDENT EQUAL gterm
    ;

bindingseq
    : nesbindingseq
    | 
    ;

tfnebindingseq
    : LET IDENT EQUAL gformat IN tfnebindingseq
    | IDENT LEFTARROW gformat SEMI tfnebindingseq
    | IDENT LPAREN gformatseq RPAREN optphase
    | IDENT
    | TABLE LPAREN gformatseq RPAREN optphase
    | EVENT LPAREN gformatseq RPAREN optphase
    ;

optphase
    : PHASE INT
    | 
    ;

nounif_value
    : SLASH INT
    | SLASH MINUS INT
    | 
    ;

select_value
    : SLASH INT
    | SLASH MINUS INT
    | 
    ;

gformat
    : IDENT LPAREN gformatseq RPAREN
    | CHOICE LBRACKET gformat COMMA gformat RBRACKET
    | IDENT
    | INT
    | gformat PLUS INT
    | INT PLUS gformat
    | LPAREN gformatseq RPAREN
    | NEW IDENT LBRACKET fbindingseq RBRACKET
    | NEW IDENT
    | STAR IDENT
    | LET IDENT EQUAL gformat IN gformat
    | IDENT LEFTARROW gformat SEMI gformat
    ;

negformatseq
    : gformat COMMA negformatseq
    | gformat
    ;

gformatseq
    : negformatseq
    | 
    ;

fnesbindingseq
    : REPL INT EQUAL gformat SEMI fnesbindingseq
    | REPL INT EQUAL gformat
    | IDENT EQUAL gformat SEMI fnesbindingseq
    | IDENT EQUAL gformat
    ;

fbindingseq
    : fnesbindingseq
    | 
    ;

optorfail
    : ORTEXT FAIL
    | 
    ;

mayfailvartype: neidentseq COLON typeid optorfail;

nemayfailvartypeseq
    : mayfailvartype COMMA nemayfailvartypeseq
    | mayfailvartype
    ;

mayfailvartypeseq
    : nemayfailvartypeseq
    | 
    ;

forallmayfailvartype
    : FORALL nemayfailvartypeseq SEMI
    | 
    ;

extended_equation
    : LET IDENT EQUAL term IN extended_equation
    | IDENT LEFTARROW term SEMI extended_equation
    | term
    ;

treducotherwise
    : OTHERWISE forallmayfailvartype extended_equation treducotherwise
    | OTHERWISE forallmayfailvartype extended_equation
    ;

treducmayfail
    : forallmayfailvartype extended_equation treducotherwise
    | forallmayfailvartype extended_equation
    ;

treduc
    : forallvartype extended_equation SEMI treduc
    | forallvartype extended_equation
    ;

eqlist
    : forallvartype extended_equation
    | forallvartype extended_equation SEMI eqlist
    ;

tclause
    : term RED term
    | term
    | term EQUIV term
    | term EQUIVEQ term
    ;

tclauses
    : forallmayfailvartype tclause SEMI tclauses
    | forallmayfailvartype tclause DOT
    ;

programoptions
    : LBRACKET progoptlist RBRACKET
    | 
    ;

progoptlist
    : progopt
    | progopt COMMA progoptlist
    ;

progopt
    : IDENT GREATER IDENT
    | IDENT LESS IDENT
    ;

progbegin: IDENT programoptions LBRACE;

progend
    : RBRACE
    | 
    ;

syncopt
    : 
    | LBRACKET BARRIER COLON IDENT IDENT IDENT RBRACKET
    ;

tprocess
    : progbegin tprocess
    | LPAREN tprocess RPAREN
    | IDENT syncopt
    | IDENT LPAREN ptermseq RPAREN syncopt
    | REPL tprocess
    | REPL IDENT LEQ IDENT tprocess
    | FOREACH IDENT LEQ IDENT DO tprocess
    | INT
    | YIELD
    | NEW IDENT newarg COLON typeid opttprocess
    | IDENT RANDOM typeid opttprocess
    | IF pterm THEN tprocess optelseprocess
    | IN LPAREN pterm COMMA tpattern RPAREN options_ opttprocess
    | OUT LPAREN pterm COMMA pterm RPAREN progend opttprocess
    | LET tpattern EQUAL pterm
    | LET tpattern EQUAL pterm IN tprocess optelseprocess
    | basicpattern LEFTARROW pterm opttprocess
    | LET nevartype SUCHTHAT pterm options_
    | LET nevartype SUCHTHAT pterm options_ IN tprocess optelseprocess
    | INSERT IDENT LPAREN ptermseq RPAREN opttprocess
    | GET IDENT LPAREN tpatternseq RPAREN optsuchthat options_ optinprocess optelseprocess
    | tprocess BAR tprocess
    | EVENT IDENT LPAREN ptermseq RPAREN newarg opttprocess
    | EVENT IDENT newarg opttprocess
    | PHASE INT opttprocess
    | BARRIER INT opttprocess
    | BARRIER INT LBRACKET IDENT RBRACKET opttprocess
    ;

opttprocess
    : SEMI tprocess
    | 
    ;

optinprocess
    : IN tprocess
    | 
    ;

optelseprocess
    : ELSE tprocess
    | 
    ;

basicpattern
    : IDENT
    | IDENT COLON typeid
    | UNDERSCORE
    | UNDERSCORE COLON typeid
    ;

tpattern
    : basicpattern
    | LPAREN tpatternseq RPAREN
    | IDENT LPAREN tpatternseq RPAREN
    | CHOICE LBRACKET tpattern COMMA tpattern RBRACKET
    | CHOICE LBRACKET tpattern COMMA tpattern RBRACKET COLON typeid
    | INT
    | tpattern PLUS INT
    | INT PLUS tpattern
    | EQUAL pterm
    ;

nepatternseq
    : tpattern COMMA nepatternseq
    | tpattern
    ;

tpatternseq
    : nepatternseq
    | 
    ;

pterm
    : IDENT LPAREN ptermseq RPAREN
    | CHOICE LBRACKET pterm COMMA pterm RBRACKET
    | IDENT
    | INT
    | pterm MINUS INT
    | pterm PLUS INT
    | INT PLUS pterm
    | pterm LESS pterm
    | pterm GREATER pterm
    | pterm LEQ pterm
    | pterm GEQ pterm
    | pterm EQUAL pterm
    | pterm DIFF pterm
    | NOT LPAREN pterm RPAREN
    | pterm OR pterm
    | pterm WEDGE pterm
    | NEW IDENT newarg COLON typeid SEMI pterm
    | IDENT RANDOM typeid SEMI pterm
    | IF pterm THEN pterm optelseterm
    | LET tpattern EQUAL pterm IN pterm optelseterm
    | basicpattern LEFTARROW pterm SEMI pterm
    | LET nevartype SUCHTHAT pterm IN pterm optelseterm
    | EVENT IDENT optargs newarg SEMI pterm
    | INSERT IDENT LPAREN ptermseq RPAREN SEMI pterm
    | GET IDENT LPAREN tpatternseq RPAREN optsuchthat options_ IN pterm optelseterm
    | LPAREN ptermseq RPAREN
    ;

optelseterm
    : ELSE pterm
    | 
    ;

optsuchthat
    : SUCHTHAT pterm
    | 
    ;

optargs
    : LPAREN ptermseq RPAREN
    | 
    ;

neptermseq
    : pterm COMMA neptermseq
    | pterm
    ;

ptermseq
    : neptermseq
    | 
    ;
