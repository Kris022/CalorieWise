import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import CalorieSummary from "../components/summary/CalorieSummary";
import MacroSummary from "../components/summary/MacroSummary";

import AddFoodForm from "../components/LogFoodForm";
import FoodBrowser from "../components/FoodBrowser";

import Modal from "../components/modal/Modal";

import { fetchAllFoods } from "../services/foodApi";

export default function DashboardPage() {
  const [foodsData, setFoodsData] = useState([]);
  const [foodFormVisible, setFoodFormVisible] = useState(false);

  const toggleModal = () => {
    setFoodFormVisible(!foodFormVisible);
  };

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const responseData = await fetchAllFoods();
        setFoodsData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // fetchMyData();
  }, []);

  return (
    <div className=" w-full h-[91vh] top-[60px]">
      <div className={foodFormVisible ? "block" : "hidden"}>
        <Modal handleClose={toggleModal}>
          <AddFoodForm />
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
            <CalorieSummary />
          </div>
          <div className="p-1">
            <MacroSummary />
          </div>
          <div className="flex-1 p-1">
            {/* Goal heatmap */}
            <CalorieSummary />
          </div>

          {/* Quick Log Button */}
          <div className="sm:hidden">
            <button onClick={toggleModal} className="bg-green-600 text-white w-full px-2 py-3 text-2xl rounded-md font-semibold">
              Quick Log
            </button>
          </div>
        </div>

        {/* Section 2 wrapper */}
        <div className="hidden sm:flex border-red-700 p-2 mt-4">
          <div className="flex-1">
            <div>
              <h2 className="text-xl  mb-4">Food Today</h2>
            </div>
            <FoodBrowser />
          </div>

          <div className="flex-1">
            <div>
              <h2 className="text-xl  mb-4">Meals Today</h2>
            </div>
            <FoodBrowser />
          </div>
        </div>
      </div>
    </div>
  );
}
