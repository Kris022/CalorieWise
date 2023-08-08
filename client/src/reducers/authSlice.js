import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

// user is an object that has an email and token properties
// user: {email: "", token: "", calorieGoal}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
