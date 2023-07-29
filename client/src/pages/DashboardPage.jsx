import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalorieSummary from "../components/CalorieSummary";
import DailyMacrosInfo from "../components/DailyMacrosInfo";
import LogMealButton from "../components/LogMealButton";
import SelectFoodForm from "../components/SelectFoodForm";
import FoodBrowser from "../components/FoodBrowser";
import LogFoodForm from "../components/LogFoodForm"; // Import the LogFoodForm component

export default function DashboardPage() {
  // State to manage whether LogFoodForm should be shown as modal or not
  const [showLogFoodModal, setShowLogFoodModal] = useState(false);

  // Function to handle the click of the Log Meal button
  const handleLogMealClick = () => {
    setShowLogFoodModal(true); // Show the LogFoodForm as a modal on mobile
  };

  // Close the modal when the form is submitted or canceled
  const closeModal = () => {
    setShowLogFoodModal(false);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col sm:items-center h-full mt-10">
        <div>
          {/* Calorie Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CalorieSummary />
          </motion.div>

          {/* Daily Macros */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <DailyMacrosInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {/* Render LogMealButton with onClick handler */}
            <LogMealButton onClick={handleLogMealClick} />
          </motion.div>
        </div>
      </div>

      {/* Conditionally render LogFoodForm as a modal or inline */}
      {showLogFoodModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          {/* Render LogFoodForm as a modal */}
          <LogFoodForm onClose={closeModal} />
        </motion.div>
      )}
    </div>
  );
}
