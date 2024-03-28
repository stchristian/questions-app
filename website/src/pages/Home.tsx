import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { startQuiz } from "../store/appSlice";
import { usePrefetch } from "../api";

function Home() {
  const dispatch = useAppDispatch();
  const prefetch = usePrefetch("getQuestions");

  return (
    <>
      <h1 className="text-2xl font-bold mb-52">Welcome to the Javascript challenge!</h1>
      <p>You will be presented with 10 True/False questions. Can you score 100%?</p>
      <Link
        className="mt-auto btn"
        to="/questions"
        onMouseEnter={() => prefetch()}
        onClick={() => {
          dispatch(startQuiz());
        }}
      >
        Begin
      </Link>
    </>
  );
}

export default Home;
