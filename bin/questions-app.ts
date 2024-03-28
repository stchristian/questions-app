#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { FrontendStack } from "../lib/frontend-stack";
import { BackendStack } from "../lib/backend-stack";

const app = new cdk.App();
const backendStack = new BackendStack(app, "BackendStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: "eu-central-1" },
});
const frontendStack = new FrontendStack(app, "FrontendStack", {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: "eu-central-1" },
});
