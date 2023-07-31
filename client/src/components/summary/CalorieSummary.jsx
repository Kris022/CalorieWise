import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CalorieSummary({ calories }) {
  // Dummy data for calorie goal
  const calorieGoal = 2000;

  // Parse the prop to int
  const dailyCalories = Number.isNaN(parseInt(calories)) ? 0 : parseInt(calories);

  // Calculate the remaining calories
  const remainingCalories = calorieGoal - dailyCalories;
  const percentage = Math.floor((dailyCalories / calorieGoal) * 100);

  return (
    <div className="sm:flex sm:justify-center rounded-lg shadow-md p-4 bg-white">
      <div className="flex justify-center mb-4 sm:mb-0">
        <div style={{ width: 130 }}>
          <CircularProgressbar
            value={percentage}
            text={`${remainingCalories} kcal`}
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
        <h2 className="text-center sm:text-left font-semibold">Calorie Summary</h2>
        <div className="mt-2 text-center sm:text-left text-gray-700">
          <p>Caloric Goal: {calorieGoal} kcal</p>
          <p>Calories Consumed: {dailyCalories} kcal</p>
          <p>Calories Left: {remainingCalories} kcal</p>
        </div>
      </div>
    </div>
  );
}
