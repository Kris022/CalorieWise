import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CalorieSummary() {
  // Dummy data for daily calorie intake and calorie goal
  const calorieGoal = 2000;
  const dailyCalories = 1200;

  // Calculate the remaining calories
  const remainingCalories = calorieGoal - dailyCalories;
  const percentage = Math.floor((dailyCalories / calorieGoal) * 100);

  return (
    <div className="card flex">
      <div className="flex flex-col items-center">
        <div style={{ width: 100 }}>
          <CircularProgressbar
            value={percentage}
            text={`${remainingCalories} kcal left`}
            styles={buildStyles({
              textSize: "14px",

              // Colors
              pathColor: `#34c734`,
              textColor: "#131413",
              trailColor: "#d6d6d6",
              backgroundColor: "#4BC0C0BE",
            })}
          />
        </div>
      </div>

      <div className="flex flex-col ml-8 justify-center">
        <h2 className="text-xl font-semibold mb-2">Calorie Summary</h2>
        <p className="text-gray-700">Caloric Goal: {calorieGoal} kcal</p>
        <p className="text-gray-700">Calories Consumed: {dailyCalories} kcal</p>
      </div>
    </div>
  );
}
