
export abstract class AbstractToken<T> {
  value: T;

  constructor(src: string) {
    this.value = this.parseStrToValue(src);
  }

  getValue(): T {
    return this.value;
  }

  abstract parseStrToValue(src: string): T;

  static isValidToken(src: string): boolean {
    return false;
  }
}