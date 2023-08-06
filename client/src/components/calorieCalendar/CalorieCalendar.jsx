import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  getDay,
  getCurrentDate,
  getPreviousDays,
  getNextDays,
} from "../../utils/utils";

const CalorieCalendar = ({ setSelectedDate }) => {
  const [calorieData, setCalorieData] = useState([
    ...getPreviousDays(getCurrentDate()),
  ]);

  const handleBackArrowClick = () => {
    const currentDate =
      calorieData.length > 0 ? calorieData[0] : getCurrentDate();
    const previousDays = getPreviousDays(currentDate);
    setCalorieData(previousDays);
  };

  const handleNextArrowClick = () => {
    const currentDate =
      calorieData.length > 0
        ? calorieData[calorieData.length - 1]
        : getCurrentDate();
    const nextDays = getNextDays(currentDate);
    setCalorieData(nextDays);
  };

  const getCalorieColor = (calories, goal) => {
    if (calories > goal - 200 && calories < goal + 200) {
      return "bg-green-500";
    } else if (calories > goal + 200) {
      return "bg-red-500";
    } else {
      return "bg-green-300";
    }
  };

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="card h-full flex flex-col">
      <div className="max-w-3xl my-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4 ">Timeline</h2>
        </div>

        <div className="flex justify-between">
          {/* Backword button */}
          <motion.div
            whileTap={{ scale: 0.8 }} // Scale down the arrow on tap/click
            onClick={handleBackArrowClick}
            className="flex items-center cursor-pointer"
          >
            <BsFillArrowLeftSquareFill className="text-green-700" size={24} />
          </motion.div>

          {/* Calendar icons */}
          <div className="w-full flex justify-around ">
            {calorieData.map((date) => {
              return (
                <motion.div
                  key={date}
                  whileHover={{ scale: 1.2 }} // Scale up the cube on hover
                  className={`cursor-pointer flex items-center justify-center rounded-md h-12 w-12 text-center text-white font-semibold bg-green-500`}
                  onClick={() => handleClick(date)}

                  data-tooltip-id="my-tooltip" data-tooltip-content={date} data-tooltip-place="bottom"
                >
                  {getDay(date)}
                </motion.div>
              );
            })}
            <Tooltip id="my-tooltip" />
          </div>

          {/* Forward button */}
          <motion.div
            whileTap={{ scale: 0.8 }} // Scale down the arrow on tap/click
            onClick={handleNextArrowClick}
            className="flex items-center cursor-pointer"
          >
            <BsFillArrowRightSquareFill className="text-green-700" size={24} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCalendar;
