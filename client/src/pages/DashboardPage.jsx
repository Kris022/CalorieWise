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
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [foodCardIndex, setFoodCardIndex] = useState(-1);


  // Toggles modal visiblity
  const toggleModal = () => {
    setFoodFormVisible(!foodFormVisible);
  };

  const closeModal = () => {
    setFoodFormVisible(false);
    setFoodCardIndex(-1);
  }

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
    const currentDate = selectedDate;

    const res = await fetch(`${BASE_URL}api/foods/${currentDate}`); // Assuming the backend endpoint is /api/foods
    const data = await res.json();

    if (res.ok) {
      updateLocalFoodData(data);
    }
    if (!res.ok) {
      console.error("Error fetching food for today:", data.error);
    }
  };

  // Logs food to the database
  const submitFood = async (food) => {
    // POST if no food selected for edit
    if (foodCardIndex == -1) {
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
        fetchFoodForToday();
      }
    }

    // Otherwise patch

  };

  // Logs food to the database
  const deleteFood = async (food) => {
    const res = await fetch(`${BASE_URL}api/foods/` + food._id, {
      method: "DELETE",
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
      fetchFoodForToday();
    }
  };

  useEffect(() => {
    // fetchAllFoodData();
    fetchFoodForToday();
  }, [selectedDate]);
  // Add selected date to the list of dependencies

  return (
    <div className=" w-full h-[91vh] top-[60px]">

      {/* Quick Log Modal */}
      <div className={foodFormVisible ? "block" : "hidden"}>
        <Modal handleClose={closeModal}>
          <AddFoodForm
            foodCardIndex={foodCardIndex}
            foodsData={foodsData}
            onSubmitFood={submitFood}
            visible={foodFormVisible}
            onClose={closeModal} />
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
          initial={{ scale: 0, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="hidden sm:block sm:p-4"
        >
          <h2 className="text-gray-900 text-xl ">Analytics</h2>
        </motion.div>

        {/* Section 1 contents wraper */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }} 
          className="flex flex-col sm:flex-row"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="p-1"
          >
            <CalorieSummary calories={totalMacros.calories} />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="p-1"
          >
            <MacroSummary macros={totalMacros} />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="flex-1 p-1"
          >
            {/* Goal heatmap */}
            {/* Calorie summary but weekly */}
            <CalorieSummary />
          </motion.div>

          {/* Quick Log Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="sm:hidden"
          >
            <motion.button
              onClick={() => setFoodFormVisible(true)}
              className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
            >
              Quick Log
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Section 2 wrapper */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="hidden sm:flex border-red-700 p-2 mt-4"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="flex-1"
          >
            <div>
              <h2 className="text-xl  mb-4">What you ate today:</h2>
            </div>
            <FoodBrowser toggleModal={() => setFoodFormVisible(true)} setFoodCardIndex={setFoodCardIndex} foodsData={foodsData} deleteFood={deleteFood} />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="flex-1"
          >
            <div>
              <h2 className="text-xl  mb-4">Meals Today</h2>
            </div>
            <div>
              {/* <CalorieCalendar /> */}
              <CalorieCalendar setSelectedDate={setSelectedDate} />
            </div>
            {/* Quick Log Button */}
            <motion.div
              className="sm:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }} 
            >
              <motion.button
                onClick={() => setFoodFormVisible(true)}
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
