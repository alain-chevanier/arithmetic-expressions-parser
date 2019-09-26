import { Lexer } from './lexer';


describe("Lexer", () => {
  let identifiers = ['debt', 'wealth'];
  let lexer = new Lexer(identifiers);

  test('lex parenthesis', () => {
    let tokens = lexer.lex("(())()");
    let expected = [];
    expect(tokens.length).toBe(6);
  });
});

