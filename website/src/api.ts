import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Question = {
  question: string;
  answer: boolean;
};

function fetchQuestions(): Promise<Question[]> {
  return Promise.resolve([
    {
      question: "JavaScript is a programming language primarily used for styling web pages.",
      answer: false,
    },
    {
      question: "JavaScript can only be used for client-side scripting.",
      answer: false,
    },
    {
      question: "JavaScript is a case-sensitive language.",
      answer: true,
    },
    {
      question: "JavaScript is the same as Java.",
      answer: false,
    },
    {
      question: "JavaScript code can be embedded directly into HTML pages.",
      answer: true,
    },
    {
      question: "JavaScript variables must be declared before they can be used.",
      answer: true,
    },
    {
      question: "JavaScript is primarily used for adding interactivity to web pages.",
      answer: true,
    },
    {
      question: "JavaScript is a compiled language.",
      answer: false,
    },
    {
      question: "JavaScript was originally developed by Microsoft.",
      answer: false,
    },
    {
      question: "JavaScript code is executed on the server-side.",
      answer: false,
    },
  ]);
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>(
      // If API URL is not present fallback to local function
      import.meta.env.VITE_API_URL
        ? {
            query: () => "/questions",
          }
        : {
            queryFn: async () => {
              const questions = await fetchQuestions();
              return {
                data: questions,
              };
            },
          }
    ),
  }),
});

export const { useGetQuestionsQuery, usePrefetch } = api;
