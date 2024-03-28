import { Navigate, useNavigate } from "react-router-dom";
import { useGetQuestionsQuery } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { saveAnswer } from "../store/appSlice";

function Questions() {
  const { data, isLoading } = useGetQuestionsQuery();
  const { answers, quizStarted } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!quizStarted) return <Navigate to="/" />;
  if (isLoading || !data) return <div>Loading...</div>;

  const currentQuestionIndex = answers.length;
  if (currentQuestionIndex >= data.length) return <Navigate to="/result" />;
  const currentQuestion = data[currentQuestionIndex];

  function answerQuestions(value: boolean) {
    dispatch(saveAnswer(value));
    if (currentQuestionIndex === data!.length - 1) {
      return navigate("/result");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">
        Question {currentQuestionIndex + 1} / {data.length}
      </h1>
      <p className="text-lg italic mt-52">{currentQuestion.question}</p>
      <div className="flex flex-row justify-between mt-auto">
        <button className="btn" onClick={() => answerQuestions(false)}>
          False
        </button>
        <button className="btn" onClick={() => answerQuestions(true)}>
          True
        </button>
      </div>
    </>
  );
}

export default Questions;
