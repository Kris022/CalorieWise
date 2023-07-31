import React, { useState } from 'react';

export default function UserCalorieIntakeForm() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [weightGoal, setWeightGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, e.g., send the data to a server or process it further

    // Clear the form fields after submission
    setAge('');
    setWeight('');
    setHeight('');
    setActivityLevel('');
    setWeightGoal('');
  };

  return (
    <div className="card">
      <h2 className="text-3xl font-semibold text-center mb-6">Enter Calorie Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">Weight (kg)</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">Height (cm)</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityLevel">Activity Level</label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="activityLevel"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            required
          >
            <option value="" disabled>Select your activity level</option>
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="lightlyActive">Lightly Active (light exercise/sports 1-3 days/week)</option>
            <option value="moderatelyActive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
            <option value="veryActive">Very Active (hard exercise/sports 6-7 days/week)</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weightGoal">Weight Goal</label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weightGoal"
            value={weightGoal}
            onChange={(e) => setWeightGoal(e.target.value)}
            required
          >
            <option value="" disabled>Select your weight goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

