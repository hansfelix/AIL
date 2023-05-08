import { Expression } from "../lang/Expressions";
import { ExpressionType } from "../lang/ExpressionTypes";

// TODO: implement evaluate expression to accomplish tests
export function evaluate(expression: Expression): any {
  let response: string | boolean | number = "";

  switch (expression.type) {
    case ExpressionType.If:
      const ifFalse = expression.payload.if_false;
      const ifTrue = expression.payload.if_true;
      const testExpression = expression.payload.test_expression;

      // Evaluate testExpression
      const responseTestExpression = evaluate(testExpression);

      // validate testExpression
      if (responseTestExpression) {
        response = evaluate(ifTrue);
      } else {
        response = evaluate(ifFalse);
      }
      break;

    case ExpressionType.And:
      response = evalAnd(expression.payload);
      break;

    case ExpressionType.Or:
      response = evalOr(expression.payload);
      break;

    case ExpressionType.Not:
      response = evalNot(expression.payload);
      break;

    case ExpressionType.Const:
      response = expression.payload.value;
      break;

    case ExpressionType.Eq:
      response = evalEqual(expression.payload);
      break;

    case ExpressionType.StringToUpper:
      response = evalStringToUpper(expression.payload);
      break;

    case ExpressionType.StringToLower:
      response = evalStringToLower(expression.payload);
      break;

    default:
      break;
  }

  return response;
}

function evalAnd(payload: { expressions: Expression[] }): boolean {
  const responseExpressions = [];

  for (let expression of payload.expressions) {
    const responseExpression = evaluate(expression);
    responseExpressions.push(responseExpression);
  }

  return responseExpressions.reduce((a, b) => a && b);
}

function evalOr(payload: { expressions: Expression[] }): boolean {
  const responseExpressions = [];

  for (let expression of payload.expressions) {
    const responseExpression = evaluate(expression);
    responseExpressions.push(responseExpression);
  }

  return responseExpressions.reduce((a, b) => a || b);
}

function evalNot(payload: { expression: Expression }): boolean {
  // First evaluate Expression inside payload
  const responseExpressionInPayload = evaluate(payload.expression);

  // TODO: check boolean and string
  return !responseExpressionInPayload;
}

// TODO: if only exist an equal must return an string?
function evalEqual(payload: { left: Expression; right: Expression }): boolean {
  // First evaluate Expression inside payload
  const responseLeftExpression = evaluate(payload.left);
  const responseRightExpression = evaluate(payload.right);

  return responseLeftExpression === responseRightExpression ? true : false;
}

function evalStringToUpper(payload: { value: Expression }): string {
  const expressionInPayload = payload.value;
  // First evaluate Expression inside payload
  const responseExpressionInPayload = evaluate(expressionInPayload);

  if (!(typeof responseExpressionInPayload === "string")) {
    return "Invalid string";
  }

  return responseExpressionInPayload.toUpperCase();
}

function evalStringToLower(payload: { value: Expression }): string {
  const expressionInPayload = payload.value;
  // First evaluate Expression inside payload
  const responseExpressionInPayload = evaluate(expressionInPayload);

  if (!(typeof responseExpressionInPayload === "string")) {
    return "Invalid string";
  }

  return responseExpressionInPayload.toLowerCase();
}
