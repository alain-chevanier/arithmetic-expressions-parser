import { Token, ParenthesisToken, Parenthesis } from './tokens';
import { Lexer } from './lexer';


describe("Lexer", () => {
  let identifiers = ['debt', 'wealth'];
  let lexer = new Lexer(identifiers);

  test('lex parenthesis', () => {
    let token = lexer.getToken("(") as ParenthesisToken;
    expect(token).toBeTruthy();
    expect(token.getValue()).toBe(Parenthesis.OPENING_PARENTHESIS);
  });
});

