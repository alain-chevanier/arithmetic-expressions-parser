export type Token = ParenthesisToken | ArithmeticOperatorToken | NumericalToken | IdentifierToken;

export abstract class AbstractToken<T> {
  value: T;

  constructor(src: string) {
    this.value = this.parseStrToValue(src);
  }

  getValue(): T {
    return this.value;
  }

  abstract parseStrToValue(src: string): T;

  static isValidToken(src: string) {
    return false;
  }
}

export class NumericalToken extends AbstractToken<number> {

  parseStrToValue(src: string): number {
    return parseFloat(src);
  }
}

export enum ArithmeticOperator {
  SUM = "+", 
  DIFF = "-",
  MULT = "*",
  DIV = "/",
}

export class ArithmeticOperatorToken extends AbstractToken<ArithmeticOperator> {
  parseStrToValue(src: string): ArithmeticOperator {
    return ArithmeticOperator[src];
  }
}

export enum Parenthesis {
  OPENING_PARENTHESIS = "(", 
  CLOSING_PARENTHESIS = ")",
}

export class ParenthesisToken extends AbstractToken<Parenthesis> {
  parseStrToValue(src: string): Parenthesis {
    if(src == Parenthesis.OPENING_PARENTHESIS) {
      return Parenthesis.OPENING_PARENTHESIS;
    }
    if(src == Parenthesis.CLOSING_PARENTHESIS) {
      return Parenthesis.CLOSING_PARENTHESIS;
    }
    return null;
  }

  static isValidToken(src: string) {
    return src == Parenthesis.OPENING_PARENTHESIS || src == Parenthesis.CLOSING_PARENTHESIS;
  }
}

export class IdentifierToken extends AbstractToken<string> {
  identifiers: Array<string>;
  isValid: boolean;

  constructor(src: string, identifiers: Array<string>) {
    super(src);
    this.identifiers = identifiers;
  }

  parseStrToValue(src: string): string {
    this.isValid = (src in this.identifiers);
    return src;
  }
}