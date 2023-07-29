import React, { useState } from 'react';

import CalorieSummary from "../components/CalorieSummary";
import DailyMacrosInfo from "../components/DailyMacrosInfo";
import LogMealButton from "../components/LogMealButton";
import LogFoodForm from "../components/LogFoodForm";
import SelectFoodForm from "../components/SelectFoodForm";
import FoodBrowser from "../components/FoodBrowser";

export default function DashboardPage() {
  const loggedFoods = [
    { name: "Food 1", calories: 100 },
    { name: "Food 2", calories: 200 },
    { name: "Food 3", calories: 300 },
    // Add more logged foods as needed
  ];

  const [addedFoods, setAddedFoods] = useState([
    { name: "Chicken Breast", protein: 25, carbs: 0, fats: 3 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    { name: "Brown Rice", protein: 2, carbs: 35, fats: 1 },
    // Add more food items as needed
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex justify-center">
      <div className="flex mt-20">
        <div className="flex flex-col items-center">
          <CalorieSummary />
          <div className="mt-2">
            <DailyMacrosInfo />
          </div>
          <div className="mt-2">
            <LogMealButton />
          </div>
        </div>

        <div className="ml-2">
          {/* <LogFoodForm /> */}
          <FoodBrowser foods={addedFoods} />

        </div>
        <div className="ml-2">
          {/* <SelectFoodForm loggedFoods={loggedFoods} /> */}
        </div>
      </div>
    </div>
  );
}
