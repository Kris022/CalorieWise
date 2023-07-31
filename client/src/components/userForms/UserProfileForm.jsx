import React, { useState } from 'react';

export default function UserProfileForm({ user, onSave }) {
  const [username, setUsername] = useState(user.username);
  const [weight, setWeight] = useState(user.weight);
  const [targetWeight, setTargetWeight] = useState(user.targetWeight);
  const [calorieGoal, setCalorieGoal] = useState(user.calorieGoal);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an updated user object with the edited profile information
    const updatedUser = {
      ...user,
      username,
      weight,
      targetWeight,
      calorieGoal,
    };
    // Call the onSave function from the parent component with the updated user object
    onSave(updatedUser);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">User Profile Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          required
          placeholder={user.name}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Target Weight (kg)</label>
        <input
          type="number"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Calorie Goal</label>
        <input
          type="number"
          value={calorieGoal}
          onChange={(e) => setCalorieGoal(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Save Changes
      </button>
    </form>
  );
}
