Create an endpoint that returns the questions. The questions are stored in a JSON file with the questions.

Possible solution: Lambda function that includes also the _questions.json_ or host the latter in S3/DynamoDB.

React app SPA with VITE.
Home screen -> questions should be fetched in the background. BEGIN button navigates to QUIZ screen
Quiz screen -> store answers in a state variable. Present the current question always with two buttons TRUE and FALSE. Next question appears after the current is answered. After all questions are answered navigate to RESULT
Result screen -> Show the results with the correct answers. Displays a list with the answers and their number. PLAY AGAIN button navigates to HOME and resets everything.

- Dog has four legs (Your answer: true) // text color is green if answer was correct, otherwise red.

Build app with VITE and host it in an S3 bucket. -> CDK?

Tutorial on how to create website and deploy to S3 with CDK [here](https://blog.tericcabrel.com/static-website-aws-s3-cloudfront-cdk/)
