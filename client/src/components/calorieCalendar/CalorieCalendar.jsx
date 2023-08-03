import React from "react";

const calorieData = [
  { date: "2023-07-01", calories: 1800, goal: 2000 },
  { date: "2023-07-02", calories: 1800, goal: 2000 },
  // Add more calorie data for the month...
];

const CalorieCalendar = ({ setSelectedDate }) => {
  const getCalorieColor = (calories, goal) => {
    if (calories > goal - 200 && calories < goal + 200) {
      return "bg-green-500";
    } else if (calories > goal + 200) {
      return "bg-red-500";
    } else {
      return "bg-green-300";

    }
  };

  const handleClick = (date) => {
    setSelectedDate(date);
  }

  const getDay = (dt) => {
    const day = new Date(dt).toLocaleString("en-us", { weekday: 'long' }).slice(0, 3);
    return day;
  }

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
              className={`cursor-pointer flex items-center justify-center rounded-md h-12 w-12 text-center text-white font-semibold ${calorieColor}`}
              onClick={() => handleClick(date)}
            >
              {getDay(date)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalorieCalendar;
