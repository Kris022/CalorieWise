import React from "react";

const FoodCard = ({ food }) => {
  const { name, protein, carbs, fats } = food;

  return (
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          disabled
        >
          Edit Food
        </button>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Protein: {protein} g</p>
        <p className="text-gray-700">Carbs: {carbs} g</p>
        <p className="text-gray-700">Fats: {fats} g</p>
      </div>
    </div>
  );
};

export default FoodCard;
