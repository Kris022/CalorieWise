import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import CalorieSummary from "../components/summary/CalorieSummary";
import MacroSummary from "../components/summary/MacroSummary";
import CalorieCalendar from "../components/calorieCalendar/CalorieCalendar";

import AddFoodForm from "../components/LogFoodForm";
import FoodBrowser from "../components/FoodBrowser";

import Modal from "../components/modal/Modal";

import { fetchAllFoods, createFood } from "../services/foodApi";

const BASE_URL = "http://localhost:4000/";

export default function DashboardPage() {
  const [foodsData, setFoodsData] = useState([]);
  const [foodFormVisible, setFoodFormVisible] = useState(false);
  const [totalMacros, setTotalMacros] = useState([]);

  const calculateSum = (property, data) => {
    const sum = data.reduce((acc, food) => acc + food[property], 0);
    return sum;
  };

  const toggleModal = () => {
    setFoodFormVisible(!foodFormVisible);
  };

  const updateFoodData = (data) => {
    setFoodsData(data);
    setTotalMacros({
      calories: calculateSum("calories", data),
      carbs: calculateSum("carbs", data),
      fats: calculateSum("fats", data),
      protein: calculateSum("protein", data),
    });
  };

  const fetchFoodData = async () => {
    const res = await fetch(`${BASE_URL}api/foods/`);
    const json = await res.json();

    if (res.ok) {
      updateFoodData(json);
    }
    if (!res.ok) {
      console.error("Error fetching data:", error);
    }
  };

  const submitFood = async (food) => {
    const res = await fetch(`${BASE_URL}api/foods/`, {
      method: "POST",
      body: JSON.stringify(food),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      console.log(json);
    }

    if (res.ok) {
      // return data
      fetchFoodData();
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <div className=" w-full h-[91vh] top-[60px]">
      <div className={foodFormVisible ? "block" : "hidden"}>
        <Modal handleClose={toggleModal}>
          <AddFoodForm onSubmitFood={submitFood} onClose={toggleModal} />
        </Modal>
      </div>

      {/* Page wrapper */}
      <div className=" max-w-7xl mx-auto p-4  ">
        {/* Page title */}
        <div className="hidden sm:block sm:p-4">
          <h2 className="text-gray-900 text-xl ">Analytics</h2>
        </div>

        {/* Section 1 contents wraper */}
        <div className="flex flex-col sm:flex-row  ">
          <div className="p-1">
            <CalorieSummary calories={totalMacros.calories} />
          </div>
          <div className="p-1">
            <MacroSummary macros={totalMacros} />
          </div>
          <div className="flex-1 p-1">
            {/* Goal heatmap */}
            {/* Calorie summary but weekly */}
            <CalorieSummary />
          </div>

          {/* Quick Log Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleModal}
              className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
            >
              Quick Log
            </button>
          </div>
        </div>

        {/* Section 2 wrapper */}
        <div className="hidden sm:flex border-red-700 p-2 mt-4">
          <div className="flex-1">
            <div>
              <h2 className="text-xl  mb-4">What you ate today:</h2>
            </div>
            <FoodBrowser foodsData={foodsData} />
          </div>

          <div className="flex-1">
            <div>
              <h2 className="text-xl  mb-4">Meals Today</h2>
            </div>
            <div>
              <CalorieCalendar />
            </div>
            {/* Quick Log Button */}
            <div className="sm:block">
              <button
                onClick={toggleModal}
                className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
              >
                Quick Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
