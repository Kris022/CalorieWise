import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  calorieGoal: 0,
  weeklyCalorieGoal: 0,
  proteinGoal: 0,
  carbsGoal: 0,
  fatsGoal: 0,
  sugarGoal: 0,
};

const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    setGoals: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setGoals } = goalSlice.actions;
export default goalSlice.reducer;
