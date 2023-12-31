import React from "react";
import FoodCard from "./FoodCard";


const FoodBrowser = ({ foodsData, deleteFood, setFoodCardIndex, toggleModal }) => {
  return (
    <div className="w-full rounded-lg shadow-md bg-white p-4">

      <div className="flex flex-col h-72 overflow-auto ">
        {foodsData.map((food, index) => (
          <FoodCard index={index} setFoodCardIndex={setFoodCardIndex} toggleModal={toggleModal} key={food._id} food={food} deleteFood={deleteFood} />
        ))}
      </div>
    </div>
  );
};

export default FoodBrowser;
