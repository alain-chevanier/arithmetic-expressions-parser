import { NumericalToken } from './numerical-token';

describe("NumericalToken", () => {
  test('isValidToken 123.4 to be true', () => {
    expect(NumericalToken.isValidToken('123.4')).toBeTruthy();
  });

  test('isValidToken -123.4 to be true', () => {
    expect(NumericalToken.isValidToken('-123.4')).toBeTruthy();
  });

  test('isValidToken 12345 to be true', () => {
    expect(NumericalToken.isValidToken('12345')).toBeTruthy();
  });

  test('isValidToken -12345 to be true', () => {
    expect(NumericalToken.isValidToken('-12345')).toBeTruthy();
  });

  test('isValidToken 12. to be true', () => {
    expect(NumericalToken.isValidToken('12.')).toBeTruthy();
  });

  test('isValidToken -12. to be true', () => {
    expect(NumericalToken.isValidToken('-12.')).toBeTruthy();
  });

  test('isValidToken .2 to be true', () => {
    expect(NumericalToken.isValidToken('.2')).toBeTruthy();
  });

  test('isValidToken -.2 to be true', () => {
    expect(NumericalToken.isValidToken('-.2')).toBeTruthy();
  });

  test('isValidToken 1bc to be false', () => {
    expect(NumericalToken.isValidToken('1bc')).toBeFalsy();
  });

  test('getToken 0.2', () => {
    let token = NumericalToken.getToken('0.2');
    expect(token.getValue()).toBe(0.2);
  });

  test('getToken -8.4', () => {
    let token = NumericalToken.getToken('-8.4');
    expect(token.getValue()).toBe(-8.4);
  });

  test('getToken X', () => {
    let token = NumericalToken.getToken('1bet2');
    expect(token).toBeNull();
  });
});