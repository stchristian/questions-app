import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { saveAnswer } from "../store/quizSlice";
import { useQuizState } from "../store/hooks";
import { useGetQuestionsQuery } from "../api";

function Questions() {
  const { data: questions } = useGetQuestionsQuery();
  const { answers, quizStarted } = useQuizState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!quizStarted) return <Navigate to="/" />;
  if (!questions) return <div>Loading...</div>;

  const currentQuestionIndex = answers.length;
  if (currentQuestionIndex >= questions.length) return <Navigate to="/result" />;
  const currentQuestion = questions[currentQuestionIndex];

  function answerQuestions(value: boolean) {
    dispatch(saveAnswer(value));
    if (currentQuestionIndex === questions!.length - 1) {
      return navigate("/result");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">
        Question {currentQuestionIndex + 1} / {questions.length}
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
