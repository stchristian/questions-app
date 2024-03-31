import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface QuizState {
  answers: boolean[];
  quizStarted: boolean;
}

const initialState: QuizState = {
  answers: [],
  quizStarted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    startQuiz(state) {
      state.quizStarted = true;
    },
    saveAnswer(state, action: PayloadAction<boolean>) {
      state.answers.push(action.payload);
    },
    reset() {
      return initialState;
    },
  },
});

export const selectQuiz = (state: RootState) => state.quiz;
export const { startQuiz, saveAnswer, reset } = quizSlice.actions;
export default quizSlice.reducer;
