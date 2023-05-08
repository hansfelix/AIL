import { retry } from 'rxjs';
import { Expression } from '../lang/Expressions';
import { ExpressionType } from '../lang/ExpressionTypes';

// TODO: implement evaluate expression to accomplish tests
export function evaluate(expression: Expression): any {
  // posible response types
  let response: string | boolean | number = '';

  switch (expression.type) {
    case ExpressionType.If:
      response = evalIf(
        expression.payload.if_true,
        expression.payload.if_false,
        expression.payload.test_expression,
      );
      break;

    case ExpressionType.And:
      response = evalAnd(expression.payload.expressions);
      break;

    case ExpressionType.Or:
      response = evalOr(expression.payload.expressions);
      break;

    case ExpressionType.Not:
      response = evalNot(expression.payload.expression);
      break;

    // Case const return the value without any transformation
    case ExpressionType.Const:
      response = expression.payload.value;
      break;

    case ExpressionType.Eq:
      response = evalEqual(expression.payload.left, expression.payload.right);
      break;

    case ExpressionType.StringToUpper:
      response = evalStringToUpper(expression.payload.value);
      break;

    case ExpressionType.StringToLower:
      response = evalStringToLower(expression.payload.value);
      break;

    default:
      // TODO: trown an exeption and exit recursive flow
      response = 'Expression type not allowed';
      break;
  }

  return response;
}

function evalIf(
  ifTrue: Expression,
  ifFalse: Expression,
  testExpression: Expression,
): boolean {
  // between ifTrue and ifFalse expressions, just evaluate one
  // it depends on responseTestExpression
  const responseTestExpression = evaluate(testExpression);
  return responseTestExpression ? evaluate(ifTrue) : evaluate(ifFalse);
}

function evalAnd(expressions: Expression[]): boolean {
  // Iterate each expression in array and store in responseExpressions
  // TODO: evaluate can return number and string, so we cand send and alert if type is diferent to boolean
  //       same to evalOr function.
  const responseExpressions = [];

  for (const expression of expressions) {
    const responseExpression = evaluate(expression);
    responseExpressions.push(responseExpression);
  }

  // with reduce we can evaluate all boolean elements inside responseExpressions array
  return responseExpressions.reduce((a, b) => a && b);
}

function evalOr(expressions: Expression[]): boolean {
  // Iterate each expression in array and store in responseExpressions
  // TODO: evaluate can return number and string, so we cand send and alert if type is diferent to boolean
  //       same to evalAnd function.
  const responseExpressions = [];

  for (const expression of expressions) {
    const responseExpression = evaluate(expression);
    responseExpressions.push(responseExpression);
  }

  // with reduce we can evaluate all boolean elements inside responseExpressions array
  return responseExpressions.reduce((a, b) => a || b);
}

function evalNot(expression: Expression): boolean {
  // TODO: evaluate can return number and string, so we cand send and alert if type is diferent to boolean
  const responseExpressionInPayload = evaluate(expression);
  return !responseExpressionInPayload;
}

function evalEqual(left: Expression, right: Expression): boolean {
  // TODO: evaluate can return number and string, so we cand send and alert if type is diferent to boolean
  const responseLeftExpression = evaluate(left);
  const responseRightExpression = evaluate(right);
  return responseLeftExpression === responseRightExpression ? true : false;
}

function evalStringToUpper(expression: Expression): string {
  const responseExpression = evaluate(expression);

  // Here's a simple validations for a type diferent from string like boolean and number
  // TODO: give more hints in this response
  if (!(typeof responseExpression === 'string')) {
    return 'Invalid string';
  }
  return responseExpression.toUpperCase();
}

function evalStringToLower(expression: Expression): string {
  // Here's a simple validations for a type diferent from string like boolean and number
  // TODO: give more hints in this response
  const responseExpression = evaluate(expression);

  if (!(typeof responseExpression === 'string')) {
    return 'Invalid string';
  }
  return responseExpression.toLowerCase();
}
