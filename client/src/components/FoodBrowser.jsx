import React from "react";
import FoodCard from "./FoodCard";

const FoodBrowser = ({ foods }) => {
  return (
    <div className="relative h-72 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col">
        {foods.map((food, index) => (
          <div key={index} className="my-1">
            <FoodCard food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodBrowser;
