// lambda/index.ts
import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda";

async function handler(event: APIGatewayProxyEvent, context: Context) {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify([
      {
        question: "JavaScript is a programming language primarily used for styling web pages.",
        answer: false,
      },
      {
        question: "JavaScript can only be used for client-side scripting.",
        answer: false,
      },
      {
        question: "JavaScript is a case-sensitive language.",
        answer: true,
      },
      {
        question: "JavaScript is the same as Java.",
        answer: false,
      },
      {
        question: "JavaScript code can be embedded directly into HTML pages.",
        answer: true,
      },
      {
        question: "JavaScript variables must be declared before they can be used.",
        answer: true,
      },
      {
        question: "JavaScript is primarily used for adding interactivity to web pages.",
        answer: true,
      },
      {
        question: "JavaScript is a compiled language.",
        answer: false,
      },
      {
        question: "JavaScript was originally developed by Microsoft.",
        answer: false,
      },
      {
        question: "JavaScript code is executed on the server-side.",
        answer: false,
      },
    ]),
  };

  return response;
}

export { handler };
