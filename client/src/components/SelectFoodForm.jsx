import React, { useState } from 'react';

export default function SelectFoodForm({ loggedFoods, onLogFood }) {
  const [selectedFood, setSelectedFood] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if selectedFood and amount are not empty
    if (selectedFood.trim() !== '' && amount.trim() !== '') {
      // Convert amount to a number
      const amountValue = parseInt(amount, 10);
      // Call the onLogFood function from the parent component with the food details
      onLogFood({ food: selectedFood, amount: amountValue });
      // Reset form fields
      setSelectedFood('');
      setAmount('');
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Log Food</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Select Food</label>
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          required
        >
          <option value="">Select an option...</option>
          {loggedFoods.map((food) => (
            <option key={food.name} value={food.name}>
              {food.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Amount (g)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="Enter the amount in grams"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Log Food
      </button>
    </form>
  );
};

