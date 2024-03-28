# Questions app

Simple quiz app created with **React.js, TailwindCSS and Redux Toolkit**. App retrieves a set of true/false questions from the backend and presents the questions to the user. After the user answered all of the questions, the results are presented to the user and he can restart the quiz.

## How to run the frontend app locally

Navigate to _website_ directory and issue `pnpm install` and `pnpm run dev` or use `npm` with the same commands. App will call the API already deployed to my AWS account with the url specified in the _.env_ file.

## CDK

I used [AWS CDK](https://docs.aws.amazon.com/cdk/) to set up an infrastructure in AWS with the following stacks

- **FrontendStack**: responsible to deploy the React app to an S3 bucket and publish it through CloudFront.
- **BackendStack**: wraps and deploys and AWS lambda function (present in the _/functions_ folder) that returns the questions. The function integrates into a REST API where the app can call the relevant endpoint.

## Deploy

You have to have CDK CLI already set up or use it from the node_modules directory with `npx`.

1. Run `cdk synth BackendStack` followed by `cdk deploy BackendStack`. You'll have the API url at the end of the process
2. Paste API url to .env in the _website_ folder and build the frontend app.
3. Run command specified in 1.) step but run it for `FrontendStack`.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
