import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalorieSummary from "../components/CalorieSummary";
import MacroSummary from "../components/MacroSummary";
import LogMealButton from "../components/LogMealButton";
import SelectFoodForm from "../components/SelectFoodForm";
import FoodBrowser from "../components/FoodBrowser";
import LogFoodForm from "../components/LogFoodForm"; // Import the LogFoodForm component

import { fetchAllFoods } from "../services/foodApi";

export default function DashboardPage() {
  const [foodsData, setFoodsData] = useState([]);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const responseData = await fetchAllFoods();
        setFoodsData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMyData();
  }, []);

  if (foodsData) {
    console.log(foodsData);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:p-2 ">
      <div className="hidden sm:flex flex-1 p-4"></div>

      <div className="flex flex-col sm:max-h-96">
        <div className="mt-2">
          <CalorieSummary />
        </div>
        <div className="mt-2">
          <MacroSummary />
        </div>

        <button className="hidden sm:block sm:mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded">
          Quick Log
        </button>
      </div>

      <div className="flex max-h-64 sm:max-h-96 mt-2 flex-grow sm:ml-2">
        <FoodBrowser foodsData={foodsData} />
      </div>

      <div className="sm:hidden mt-2 flex flex-1 justify-center items-center p-4 ">
        <button className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Quick Log
        </button>
      </div>
    </div>
  );
}
