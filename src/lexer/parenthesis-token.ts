import {AbstractToken} from './abstract-token';

export enum Parenthesis {
  OPENING_PARENTHESIS = "(", 
  CLOSING_PARENTHESIS = ")",
}

export class ParenthesisToken extends AbstractToken<Parenthesis> {

  parseStrToValue(src: string): Parenthesis {
    if(ParenthesisToken.isValidToken(src)) {
      return src as Parenthesis;
    }
    
    return null;
  }

  static getToken(src: string): ParenthesisToken {
    return this.isValidToken(src) ?  new ParenthesisToken(src) : null;
  }

  static isValidToken(src: string) {
    return Object.keys(Parenthesis).map(key => Parenthesis[key]).indexOf(src) != -1;
  }
}