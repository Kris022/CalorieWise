import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import CalorieSummary from "../components/summary/CalorieSummary";
import MacroSummary from "../components/summary/MacroSummary";
import CalorieCalendar from "../components/calorieCalendar/CalorieCalendar";

import AddFoodForm from "../components/LogFoodForm";
import FoodBrowser from "../components/FoodBrowser";

import Modal from "../components/modal/Modal";

import { getCurrentDate, calculateSum } from "../utils/utils";

const BASE_URL = "http://localhost:4000/";

export default function DashboardPage() {
  const [foodsData, setFoodsData] = useState([]);
  const [foodFormVisible, setFoodFormVisible] = useState(false); // Change to quick log form?
  const [totalMacros, setTotalMacros] = useState([]);


  // Toggles modal visiblity
  const toggleModal = () => {
    setFoodFormVisible(!foodFormVisible);
  };

  // updates the local foods data and total macros state
  const updateLocalFoodData = (data) => {
    setFoodsData(data);
    setTotalMacros({
      calories: calculateSum("calories", data),
      carbs: calculateSum("carbs", data),
      fats: calculateSum("fats", data),
      protein: calculateSum("protein", data),
    });
  };

  // Fetches the food data from database
  const fetchAllFoodData = async () => {
    const res = await fetch(`${BASE_URL}api/foods/`);
    const json = await res.json();

    if (res.ok) {
      updateLocalFoodData(json);
    }
    if (!res.ok) {
      console.error("Error fetching data:", error);
    }
  };


  const fetchFoodForToday = async () => {
    const currentDate = getCurrentDate();

    try {
      const res = await fetch(`${BASE_URL}api/foods/${currentDate}`); // Assuming the backend endpoint is /api/foods
      const data = await res.json();

      updateLocalFoodData(data);

    } catch (error) {
      console.error("Error fetching food for today:", error);
    }
  };

  // Logs food to teh database
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
      fetchFoodData();
    }
  };

  useEffect(() => {
    // fetchAllFoodData();
    fetchFoodForToday();
  }, []);

  return (
    <div className=" w-full h-[91vh] top-[60px]">
      <div className={foodFormVisible ? "block" : "hidden"}>
        <Modal handleClose={toggleModal}>
          <AddFoodForm onSubmitFood={submitFood} onClose={toggleModal} />
        </Modal>
      </div>


      {/* Page wrapper */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
        animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
        transition={{ duration: 0.5 }} // Animation duration
        className="max-w-7xl mx-auto p-4"
      >
        {/* Page title */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
          animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
          transition={{ duration: 0.5 }} // Animation duration
          className="hidden sm:block sm:p-4"
        >
          <h2 className="text-gray-900 text-xl ">Analytics</h2>
        </motion.div>

        {/* Section 1 contents wraper */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
          animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
          transition={{ duration: 0.5 }} // Animation duration
          className="flex flex-col sm:flex-row"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="p-1"
          >
            <CalorieSummary calories={totalMacros.calories} />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="p-1"
          >
            <MacroSummary macros={totalMacros} />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="flex-1 p-1"
          >
            {/* Goal heatmap */}
            {/* Calorie summary but weekly */}
            <CalorieSummary />
          </motion.div>

          {/* Quick Log Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="sm:hidden"
          >
            <motion.button
              onClick={toggleModal}
              className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
            >
              Quick Log
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Section 2 wrapper */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
          animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
          transition={{ duration: 0.5 }} // Animation duration
          className="hidden sm:flex border-red-700 p-2 mt-4"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="flex-1"
          >
            <div>
              <h2 className="text-xl  mb-4">What you ate today:</h2>
            </div>
            <FoodBrowser foodsData={foodsData} />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
            animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
            transition={{ duration: 0.5 }} // Animation duration
            className="flex-1"
          >
            <div>
              <h2 className="text-xl  mb-4">Meals Today</h2>
            </div>
            <div>
              {/* <CalorieCalendar /> */}
            </div>
            {/* Quick Log Button */}
            <motion.div
              className="sm:block"
              initial={{ scale: 0, opacity: 0 }} // Initial scale and opacity values
              animate={{ scale: 1, opacity: 1 }} // Animation target scale and opacity values
              transition={{ duration: 0.5 }} // Animation duration
            >
              <motion.button
                onClick={toggleModal}
                className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
              >
                Quick Log
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
