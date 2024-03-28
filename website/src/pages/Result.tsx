import { useMemo } from "react";
import { useGetQuestionsQuery } from "../api";
import { useAppDispatch, useAppSelector } from "../store";
import { reset } from "../store/appSlice";
import { useNavigate } from "react-router-dom";

function Result() {
  const { data } = useGetQuestionsQuery();
  const { answers } = useAppSelector((state) => state.app);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const correctAnswerCount = useMemo(() => {
    return answers.reduce((acc, answer, i) => {
      if (answer === data![i].answer) {
        acc++;
      }
      return acc;
    }, 0);
  }, [answers, data]);

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">
        Your score: <br />
        {correctAnswerCount} / {data!.length}
      </h1>
      <ul className="flex flex-col w-full gap-4 mb-4 overflow-y-auto text-sm text-left">
        {data!.map((q, i) => (
          <li
            key={q.question}
            className={`list-disc list-inside ${q.answer === answers[i] ? "text-slate-800" : "text-slate-400"}`}
          >
            {q.question}{" "}
            <span className="font-bold text-nowrap">
              {q.answer ? "TRUE" : "FALSE"} {q.answer === answers[i] ? "✔︎" : "✘"}
            </span>{" "}
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
