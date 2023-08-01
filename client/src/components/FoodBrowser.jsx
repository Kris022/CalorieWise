import React from "react";
import FoodCard from "./foodCard/FoodCard";


const FoodBrowser = ({foodsData, deleteFood}) => {
  return (
    <div className="w-full rounded-lg shadow-md bg-white p-4">

      <div className="flex flex-col h-72 overflow-auto ">
        {foodsData.map((food) => (
          <FoodCard key={food._id} food={food} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
};

export default FoodBrowser;
