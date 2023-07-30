import React, { useState } from "react";

export default function MacroGoalsForm({ onSubmit }) {
  const [caloricGoal, setCaloricGoal] = useState("");
  const [proteinGoal, setProteinGoal] = useState("");
  const [carbohydrateGoal, setCarbohydrateGoal] = useState("");
  const [fatGoal, setFatGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert the input values to numbers
    const caloricGoalValue = parseInt(caloricGoal, 10);
    const proteinGoalValue = parseInt(proteinGoal, 10);
    const carbohydrateGoalValue = parseInt(carbohydrateGoal, 10);
    const fatGoalValue = parseInt(fatGoal, 10);

    // Create an object with the user's caloric goal and macros
    const userGoals = {
      caloricGoal: caloricGoalValue,
      proteinGoal: proteinGoalValue,
      carbohydrateGoal: carbohydrateGoalValue,
      fatGoal: fatGoalValue,
    };

    // Call the onSubmit function from the parent component with the user's goals
    onSubmit();
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">
        Set Caloric and Macros Goals
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Caloric Goal
        </label>
        <input
          type="number"
          value={caloricGoal}
          onChange={(e) => setCaloricGoal(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="Enter your caloric goal"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Protein Goal (g)
        </label>
        <input
          type="number"
          value={proteinGoal}
          onChange={(e) => setProteinGoal(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="Enter your protein goal"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Carbohydrate Goal (g)
        </label>
        <input
          type="number"
          value={carbohydrateGoal}
          onChange={(e) => setCarbohydrateGoal(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="Enter your carbohydrate goal"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Fat Goal (g)
        </label>
        <input
          type="number"
          value={fatGoal}
          onChange={(e) => setFatGoal(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="Enter your fat goal"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Set Goals
        </button>
      </div>
    </form>
  );
}
