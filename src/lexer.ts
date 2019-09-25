import {Token, AbstractToken, ParenthesisToken, Parenthesis, ArithmeticOperator} from './tokens';

export class Lexer {
  identifiers: Array<String>;

  constructor(identifiers: Array<string>) {
    this.identifiers = identifiers;
  }

  lex(exp: string): Array<Token> {
    let tokens: Array<Token> = [];

    let curToken = "";
    for(let i = 0; i < exp.length; i++) {
      curToken += exp.charAt(i);
      let token = this.getToken(curToken);
      curToken = token ? "" : curToken;
    }

    return tokens;
  }

  getToken(token: string): Token {
    if(ParenthesisToken.isValidToken(token)) {
      return new ParenthesisToken(token);
    }

    return null;
  }
}