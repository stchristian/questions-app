import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  answers: boolean[];
  quizStarted: boolean;
}

const initialState: AppState = {
  answers: [],
  quizStarted: false,
};

const appSlice = createSlice({
  name: "app",
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

export const { startQuiz, saveAnswer, reset } = appSlice.actions;
export default appSlice.reducer;
