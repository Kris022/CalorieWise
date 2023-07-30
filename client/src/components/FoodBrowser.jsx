import React from "react";
import FoodCard from "./FoodCard";

// const foodsData = [
//   {
//     id: 1,
//     name: "Chicken Breast",
//     calories: 150,
//     protein: 25,
//     carbs: 0,
//     fat: 3,
//   },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 2, name: "Salmon", calories: 220, protein: 20, carbs: 0, fat: 15 },
//   { id: 3, name: "Brown Rice", calories: 100, protein: 2, carbs: 22, fat: 1 },
//   // Add more food items here as needed
// ];

const FoodBrowser = ({foodsData}) => {
  return (
    <div className="flex flex-col w-full sm:flex-grow rounded-lg shadow-md bg-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Eaten Today</h2>
      <div className="">
        {foodsData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodBrowser;
