import { Expression } from "../lang/Expressions";
import { ExpressionType } from "../lang/ExpressionTypes";

// TODO: implement evaluate expression to accomplish tests
export function evaluate(expression: Expression): any {
  let response : string | boolean | number = "";

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

    case ExpressionType.Const:
      response = expression.payload.value;
      break;

    default:
      break;
  }

  return response;
}

