import React, { useState } from "react";

export default function MacroGoalsForm({ onSubmit }) {
  const initialUserData = {
    calorieGoal: 0,
    carbGoal: 0,
    fatGoal: 0,
    proteinGoal: 0,
    sugarGoal: 0,
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(userData);
  };

  return (
    <form className="w-full card" onSubmit={handleSubmit}>
      <h2 className="text-3xl text-center font-semibold mb-4">
        Set Your Goals
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">
          Caloric Goal
        </label>
        <input
          type="number"
          value={userData.calorieGoal}
          onChange={(e) =>
            setUserData({ ...userData, calorieGoal: e.target.value })
          }
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
          value={userData.proteinGoal}
          onChange={(e) =>
            setUserData({ ...userData, proteinGoal: e.target.value })
          }
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
          value={userData.carbGoal}
          onChange={(e) =>
            setUserData({ ...userData, carbGoal: e.target.value })
          }
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
          value={userData.fatGoal}
          onChange={(e) =>
            setUserData({ ...userData, fatGoal: e.target.value })
          }
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
