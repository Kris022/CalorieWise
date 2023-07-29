import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

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
    // Add more food items as needed
  ]);

  return (
    <div className="w-full h-screen bg-green-300 flex flex-col">
     <CalorieSummary />
    </div>
  );
}
