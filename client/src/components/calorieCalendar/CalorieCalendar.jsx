import React from "react";

const calorieData = [
  { date: "2023-07-01", calories: 1800, goal: 2000 },
  { date: "2023-07-02", calories: 1900, goal: 2000 },
  { date: "2023-07-02", calories: 0, goal: 2000 },
  { date: "2023-07-02", calories: 1800, goal: 2000 },
  { date: "2023-07-02", calories: 1900, goal: 2000 },
  { date: "2023-07-02", calories: 1900, goal: 200 },
  { date: "2023-07-02", calories: 1900, goal: 2000 },

  // Add more calorie data for the month...
];

const CalorieCalendar = () => {
  const getCalorieColor = (calories, goal) => {
    if (calories <= goal) {
      return "bg-green-500";
    } else if (calories > goal && calories <= goal + 200) {
      return "bg-green-300";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div className="card h-full">
      <h2 className="text-xl font-semibold mb-4">Your journey this week</h2>
      <div className="grid grid-cols-7 gap-2">
        {calorieData.map((entry) => {
          const { date, calories, goal } = entry;
          const calorieColor = getCalorieColor(calories, goal);

          return (
            <div
              key={date}
              className={`rounded-full h-12 w-12 text-center text-white font-semibold ${calorieColor}`}
            >
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalorieCalendar;
