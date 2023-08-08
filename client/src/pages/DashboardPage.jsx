import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import CalorieSummary from "../components/summary/CalorieSummary";
import MacroSummary from "../components/summary/MacroSummary";
import CalorieCalendar from "../components/calorieCalendar/CalorieCalendar";

import AddFoodForm from "../components/LogFoodForm";
import MacroGoalsForm from "../components/userForms/MacroGoalsForm";

import FoodBrowser from "../components/foodBrowser/FoodBrowser";

import Modal from "../components/modal/Modal";

import { getCurrentDate, calculateSum } from "../utils/utils";

export default function DashboardPage() {
  const [foodsData, setFoodsData] = useState([]);
  const [foodFormVisible, setFoodFormVisible] = useState(false); // Change to quick log form?
  const [goalsFormVisible, setGoalsFormVisible] = useState(false); // Change to quick log form?
  const [totalMacros, setTotalMacros] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [foodCardIndex, setFoodCardIndex] = useState(-1);

  // Check if user in global state
  const auth = useSelector((state) => state.auth);

  // Toggles modal visiblity
  const toggleModal = () => {
    setFoodFormVisible(!foodFormVisible);
  };

  const closeModal = () => {
    setFoodFormVisible(false);
    setFoodCardIndex(-1);
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
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}api/foods/`);
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

    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/foods/${currentDate}`,
      {
        headers: {
          Authorization: `Bearer ${auth.user.token}`,
        },
      }
    );
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
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}api/foods/`, {
        method: "POST",
        body: JSON.stringify(food),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.user.token}`,
        },
      });

      const json = await res.json();

      if (!res.ok) {
        console.log(json);
      }

      if (res.ok) {
        fetchFoodForToday();
      }
    } else {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}api/foods/${food._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(food),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.user.token}`,
          },
        }
      );

      const json = await res.json();

      if (res.ok) {
        fetchFoodForToday();
      }
      if (!res.ok) {
        console.error("Error fetching food for today:", data.error);
      }
    }
  };

  // Logs food to the database
  const deleteFood = async (food) => {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}api/foods/` + food._id,
      {
        method: "DELETE",
        body: JSON.stringify(food),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.user.token}`,
        },
      }
    );

    const json = await res.json();

    if (!res.ok) {
      console.log(json);
    }

    if (res.ok) {
      fetchFoodForToday();
    }
  };

  const setUserGoals = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}api/goals/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.user.token}`,
      },
      body: JSON.stringify({
        data,
      }),
    });

    const json = res.json();
    if (!res.ok) {
      console.log(error);
    }
    if (res.ok) {
      console.log(json);
    }
  };

  useEffect(() => {
    // Only attempt to fetch foods if user is logged in
    if (auth.user) {
      fetchFoodForToday();
    }

    // Reftech data depending on chosen date
  }, [selectedDate, auth.user]);

  return (
    <div className=" w-full h-full top-[60px]">
      {/* Quick Log Modal */}
      <div className={foodFormVisible ? "block" : "hidden"}>
        <Modal handleClose={closeModal}>
          <AddFoodForm
            foodCardIndex={foodCardIndex}
            foodsData={foodsData}
            onSubmitFood={submitFood}
            visible={foodFormVisible}
            onClose={closeModal}
          />
        </Modal>
      </div>

      <div className={goalsFormVisible ? "block" : "hidden"}>
        <Modal handleClose={() => setGoalsFormVisible(false)}>
          <MacroGoalsForm onSubmit={setUserGoals} />
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
          <div className="h-full p-1 sm:hidden ">
            <CalorieCalendar setSelectedDate={setSelectedDate} daysToLoad={4} />
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-1"
            onClick={() => setGoalsFormVisible(true)}
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
            <div className="hidden sm:block">
              <CalorieSummary />
            </div>
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
            className="flex-1 p-1"
          >
            <div>
              <h2 className="text-xl  mb-4">What you ate</h2>
            </div>
            <FoodBrowser
              toggleModal={() => setFoodFormVisible(true)}
              setFoodCardIndex={setFoodCardIndex}
              foodsData={foodsData}
              deleteFood={deleteFood}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col p-1"
          >
            <div>
              <h2 className="text-xl mb-4">Selected: {selectedDate}</h2>
            </div>

            {/* <CalorieCalendar /> */}
            <div className="h-full">
              <CalorieCalendar setSelectedDate={setSelectedDate} />
            </div>

            {/* Quick Log Button */}
            <motion.div
              className="sm:block mt-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setFoodFormVisible(true)}
                className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold"
              >
                Quick Log
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
