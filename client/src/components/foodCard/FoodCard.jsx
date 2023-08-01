import React from "react";

const FoodCard = ({ food, deleteFood }) => {
  const { name, protein, carbs, fats } = food;

  const handleClick = () => {
    // open modal
    // set all attributes of the form to props of this form
    console.log("click")
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={handleClick}
        >
          Edit Food
        </button>
        <button onClick={() => deleteFood(food)} className="bg-red-500 hover:bg-red-600">X</button>
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
