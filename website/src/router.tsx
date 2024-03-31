import { Result } from "aws-cdk-lib/aws-stepfunctions";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

export default router;
