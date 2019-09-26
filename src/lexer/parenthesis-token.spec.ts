import { ParenthesisToken, Parenthesis } from './parenthesis-token';

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

  test('getToken (', () => {
    let token = ParenthesisToken.getToken('(');
    expect(token.getValue()).toBe('(');
  });

  test('getToken )', () => {
    let token = ParenthesisToken.getToken(')');
    expect(token.getValue()).toBe(')');
  });

  test('getToken X', () => {
    let token = ParenthesisToken.getToken('X');
    expect(token).toBeNull();
  });
});