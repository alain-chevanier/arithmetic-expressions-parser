import { ArithmeticOperatorToken, ArithmeticOperator } from './arithmetic-operator-token';

describe("ArithmeticOperatorToken", () => {
  test('isValidToken + to be true', () => {
    expect(ArithmeticOperatorToken.isValidToken('+')).toBeTruthy();
  });

  test('isValidToken - to be true', () => {
    expect(ArithmeticOperatorToken.isValidToken('-')).toBeTruthy();
  });

  test('isValidToken * to be true', () => {
    expect(ArithmeticOperatorToken.isValidToken('*')).toBeTruthy();
  });

  test('isValidToken / to be true', () => {
    expect(ArithmeticOperatorToken.isValidToken('/')).toBeTruthy();
  });

  test('isValidToken X to be false', () => {
    expect(ArithmeticOperatorToken.isValidToken('X')).toBeFalsy();
  });

  test('getToken +', () => {
    let token = ArithmeticOperatorToken.getToken('+');
    expect(token.getValue()).toBe('+');
  });

  test('getToken *', () => {
    let token = ArithmeticOperatorToken.getToken('*');
    expect(token.getValue()).toBe('*');
  });

  test('getToken /', () => {
    let token = ArithmeticOperatorToken.getToken('/');
    expect(token.getValue()).toBe('/');
  });

  test('getToken -', () => {
    let token = ArithmeticOperatorToken.getToken('-');
    expect(token.getValue()).toBe('-');
  });

  test('parseStrToValue X', () => {
    let token = ArithmeticOperatorToken.getToken('X');
    expect(token).toBeNull();
  });
});