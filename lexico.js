function lexer(input) {
  const tokens = [];

    const keywords = {
    BEGIN: 'BEGIN',
    PROGRAM: 'PROGRAM',
    INTEGER: 'INTEGER',
    BOOLEAN: 'BOOLEAN',
    END: 'END',
    WHILE: 'WHILE',
    DO: 'DO',
    READ: 'READ',
    VAR: 'VAR',
    FALSE: 'FALSE',
    TRUE: 'TRUE',
    WRITE: 'WRITE',
    IF: 'IF',
    ELSE: 'ELSE',
  };

  // separar
  const regex = /\d+(\.\d+)?|\/\/.*|\/\*[\s\S]*?\*\/|;|,|\.|>=|>|<|<=|:=|=|:|\(|[a-zA-Z][a-zA-Z0-9]*|\)|IF|ELSE|BEGIN|PROGRAM|INTEGER|THEN|STRING|BOOLEAN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE|.[a-z]+|\+|\-|\*|\//g;
  const WORD = /\bBEGIN|PROGRAM|IF|ELSE|THEN|END|WHILE|DO|READ|VAR|FALSE|TRUE|WRITE\b/g
  const TIP = /\bINTEGER|STRING|BOOLEAN\b/g
  const NUMBER = /\d+(\.\d+)?/g
  const COMMENT = /\/\/.*|\/\*[\s\S]*?\*\//g
  const IDENTIFIER = /[a-zA-Z][a-zA-Z0-9]*/gm
  const ATRIB = /:=/gm
  const PVIG = /;/gm
  const VIG = /,/gm
  const PONTO = /\./gm
  const DPONTOS = /:/gm
  const ABPAR = /\(/gm
  const FPAR = /\)/gm
  const OPREL = /<|<=|>|>=|==|<>/gm


  let match;
  while ((match = regex.exec(input)) !== null) {
    let token = {
      value: match[0].trim(),
      type: null
    };

    if (token.value.match(NUMBER)) {
      token.type = 'CTE';
      token = numberUtils(token, tokens)
    } 
    else if (token.value.match(COMMENT)) {
      token.type = 'COMMENT'
    } 
    else if (token.value.match(TIP)) {
      token.type = 'Tip'
    }
    else if (token.value.match(WORD)) { 
       token.type = `${token.value}`;
    } 
    else if (token.value.match(IDENTIFIER)) {
      token.type = 'IDENTIFIER';
    } 
    else if (token.value.match(ATRIB)) {
      token.type = 'ATRIB'
    }
    else if (token.value.match(PVIG)) {
      token.type = 'PVIG'
    }
    else if (token.value.match(VIG)) {
      token.type = 'VIG'
    }
    else if (token.value.match(PONTO)) {
      token.type = 'PONTO'
    }
    else if (token.value.match(DPONTOS)) {
      token.type = 'DPONTOS'
    }
    else if (token.value.match(ABPAR)) {
      token.type = 'ABPAR'
    }
    else if (token.value.match(FPAR)) {
      token.type = 'FPAR'
    }
    else if (token.value.match(OPREL)) {
      token.type = 'OPREL'
    }
    else {
      token.type = 'OPERATOR';
    }

    tokens.push(token);
  }

  return tokens;
}

function numberUtils(token, tokens) {
  let local = tokens.length-2
  while(tokens[local].type == 'COMMENT') {
    local -= 1
  }
  if(tokens[tokens.length-1].type == 'OPERATOR' && tokens[local].type != 'CTE' && tokens[local].type != 'IDENTIFIER' && tokens[local].type != 'COMMENT') {
        token.value = tokens[tokens.length-1].value + token.value
        tokens.pop()
      }
  return token
}

console.log(lexer("PROGRAM example; VAR x, y: STRING; BEGIN x := 5; y := 7; IF walter > y THEN WRITE(x) ELSE WRITE(y) END."))
