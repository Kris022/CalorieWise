import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import goalReducer from "../reducers/goalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goal: goalReducer,
  },
});
