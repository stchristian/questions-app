import { useMemo } from "react";
import { useAppDispatch } from "../store";
import { reset } from "../store/quizSlice";
import { useNavigate } from "react-router-dom";
import { useQuizState } from "../store/hooks";
import { useGetQuestionsQuery } from "../api";

function Result() {
  const { data: questions } = useGetQuestionsQuery();
  const { answers } = useQuizState();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const correctAnswerCount = useMemo(() => {
    return answers.reduce((acc, answer, i) => {
      if (answer === questions![i].answer) {
        acc++;
      }
      return acc;
    }, 0);
  }, [answers, questions]);

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">
        Your score: <br />
        {correctAnswerCount} / {questions!.length}
      </h1>
      <ul className="flex flex-col w-full gap-4 mb-4 overflow-y-auto text-sm text-left">
        {questions!.map((q, i) => (
          <li
            key={q.question}
            className={`flex flex-row items-center gap-4 justify-between ${
              q.answer === answers[i] ? "text-slate-800" : "text-slate-400"
            }`}
          >
            <div>{q.question} </div>
            <div className="font-bold text-nowrap w-[60px] text-center shrink-0">
              {q.answer ? "TRUE" : "FALSE"} {q.answer === answers[i] ? "✔︎" : "✘"}
            </div>
          </li>
        ))}
      </ul>
      <button
        className="mt-auto btn"
        onClick={() => {
          dispatch(reset());
          navigate("/");
        }}
      >
        Play again
      </button>
    </>
  );
}

export default Result;
