import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { HttpApi, CorsHttpMethod, HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";

export class BackendStack extends cdk.Stack {
  public apiURL: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFilePath = path.join(__dirname, "..", "functions", "index.ts");

    const myLambda = new NodejsFunction(this, "QuestionsLambda", {
      runtime: Runtime.NODEJS_18_X,
      handler: "handler",
      functionName: "question-list",
      entry: lambdaFilePath,
    });

    const httpApi = new HttpApi(this, "QuestionsAPI", {
      apiName: "Questions API",
      corsPreflight: {
        allowMethods: [CorsHttpMethod.GET, CorsHttpMethod.DELETE, CorsHttpMethod.PUT, CorsHttpMethod.POST],
        allowOrigins: ["*"],
      },
    });

    const templateLambdaIntegration = new HttpLambdaIntegration("TemplateIntegration", myLambda);

    // Create a resource and method for the API
    httpApi.addRoutes({
      path: "/questions",
      methods: [HttpMethod.GET],
      integration: templateLambdaIntegration,
    });

    this.apiURL = new cdk.CfnOutput(this, "QuestionsApiEndpoint", {
      value: httpApi.apiEndpoint,
    });
  }
}
