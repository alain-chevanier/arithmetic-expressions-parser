import { ParenthesisToken } from "./parenthesis-token";
import { ArithmeticOperatorToken } from './arithmetic-operator-token';
import { NumericalToken } from './numerical-token';
import { IdentifierToken } from './identifier-token';

export type Token = ParenthesisToken | ArithmeticOperatorToken | NumericalToken | IdentifierToken;