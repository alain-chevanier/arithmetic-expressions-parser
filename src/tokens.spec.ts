import { ParenthesisToken, Parenthesis } from './tokens';

describe("ParenthesisToken", () => {
  test('isValidToken ( to be true', () => {
    expect(ParenthesisToken.isValidToken('(')).toBeTruthy();
  });

  test('isValidToken ) to be true', () => {
    expect(ParenthesisToken.isValidToken(')')).toBeTruthy();
  });

  test('isValidToken X to be false', () => {
    expect(ParenthesisToken.isValidToken('X')).toBeFalsy();
  });

  test('parseStrToValue (', () => {
    let token = new ParenthesisToken('(');
    expect(token.getValue()).toBe(Parenthesis.OPENING_PARENTHESIS);
  });

  test('parseStrToValue )', () => {
    let token = new ParenthesisToken(')');
    expect(token.getValue()).toBe(Parenthesis.CLOSING_PARENTHESIS);
  });

  test('parseStrToValue X', () => {
    let token = new ParenthesisToken('X');
    expect(token.getValue()).toBeNull();
  });
});