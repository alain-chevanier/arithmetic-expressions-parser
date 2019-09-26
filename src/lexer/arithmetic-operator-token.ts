import {AbstractToken} from './abstract-token';

export enum ArithmeticOperator {
  SUM = "+", 
  DIFF = "-",
  MULT = "*",
  DIV = "/",
}

export class ArithmeticOperatorToken extends AbstractToken<ArithmeticOperator> {

  parseStrToValue(src: string): ArithmeticOperator {
    if (ArithmeticOperatorToken.isValidToken(src)) {
      return src as ArithmeticOperator;
    }

    return null;
  }

  static getToken(src: string): ArithmeticOperatorToken {
    return this.isValidToken(src) ?  new ArithmeticOperatorToken(src) : null;
  }

  static isValidToken(src: string) {
    return Object.keys(ArithmeticOperator).map(key => ArithmeticOperator[key]).indexOf(src) != -1;
  }
}