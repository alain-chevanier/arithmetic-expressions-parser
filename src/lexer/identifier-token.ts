import {AbstractToken} from './abstract-token';

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