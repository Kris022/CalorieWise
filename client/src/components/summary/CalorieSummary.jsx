import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useSelector, useDispatch } from "react-redux";
import { setGoals } from "../../reducers/goalSlice";

export default function CalorieSummary({ calories, weekly = false }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const [calorieGoal, setCalorieGoal] = useState(2000);

  const [loading, setLoading] = useState(true);

  const fetchCalorieGoal = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}api/goals/`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await res.json();
      if (res.ok) {
        dispatch(setGoals(json));
        setCalorieGoal(json.caloricGoal);

        if (weekly) {
          setCalorieGoal(json.caloricGoal * 7);
        }
      } else {
        setCalorieGoal(99);
      }
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalorieGoal();
  }, []);

  // Parse the prop to int
  const dailyCalories = Number.isNaN(parseInt(calories))
    ? 0
    : parseInt(calories);

  // Calculate the remaining calories
  const remainingCalories = calorieGoal - dailyCalories;
  const percentage = Math.floor((dailyCalories / calorieGoal) * 100);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sm:flex sm:justify-center rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-center mb-4 sm:mb-0">
        <div style={{ width: 130 }}>
          <CircularProgressbar
            value={percentage}
            text={`${dailyCalories} kcal`}
            styles={buildStyles({
              textSize: "14px",
              // Colors
              pathColor: `#34c734`,
              textColor: "#131413",
              trailColor: "#d6d6d6",
              backgroundColor: "#f3f3f3",
            })}
          />
        </div>
      </div>

      <div className="text-lg sm:text-base sm:flex sm:flex-col sm:justify-center sm:ml-4">
        <h2 className="text-center sm:text-left font-semibold">
          {weekly && "Weekly"} Calorie Summary
        </h2>
        <div className="mt-2 text-center sm:text-left text-gray-700">
          <p>Caloric Goal: {calorieGoal} kcal</p>
          <p>Calories Left: {remainingCalories} kcal</p>
          <p>Calories Consumed: {dailyCalories} kcal</p>
        </div>
      </div>
    </div>
  );
}
