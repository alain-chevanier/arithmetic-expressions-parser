import {AbstractToken} from './abstract-token';

export class NumericalToken extends AbstractToken<number> {

  parseStrToValue(src: string): number {
    if(NumericalToken.isValidToken(src)) {
      return parseFloat(src);
    }
    return null;
  }

  static getToken(src: string): NumericalToken {
    return this.isValidToken(src) ? new NumericalToken(src) : null;
  }

  static isValidToken(src: string): boolean {
    let regex = /^[-+]?((\d+(\.\d*)?)|(\d*\.\d+))?$/g;
    return regex.test(src);
  }
}

