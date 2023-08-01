import { useState } from "react";
import { getCurrentDate } from "../utils/utils";

export default function AddFoodForm({ onSubmitFood, onClose }) {
  const initialFormData = {
    foodName: "",
    calories: "",
    amount: "",
    proteins: "",
    carbohydrates: "",
    fats: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // Add a select field that allows to choose existing food

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if foodName and calories are not empty
    if (formData.foodName.trim() !== "" && formData.calories.trim() !== "") {
      // Convert calories, proteins, carbohydrates, and fats to numbers
      const caloriesValue = parseInt(formData.calories, 10);
      const amountValue = parseInt(formData.amount, 10);
      const proteinsValue = parseInt(formData.proteins, 10);
      const carbohydratesValue = parseInt(formData.carbohydrates, 10);
      const fatsValue = parseInt(formData.fats, 10);

      const curDate = getCurrentDate();

      // Call the onLogCalories function from the parent component with the meal details
      const food = {
        name: formData.foodName,
        calories: caloriesValue,
        date: curDate,
        amount: amountValue,
        protein: proteinsValue,
        carbs: carbohydratesValue,
        fats: fatsValue,
      };

      onSubmitFood(food);

      // Reset form fields
      setFormData(initialFormData);

      onClose();
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  // Update form state when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="card sm:max-w-3xl" onSubmit={handleSubmit}>
      {/* <div>
        <select name="" id="">
          <option value="">banana</option>
          <option value="">peanut butter</option>
          <option value="">sandwich</option>
        </select>
      </div> */}
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Log Calories</h2>
        <button onClick={handleClose}>Close</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Food Name</label>
        <input
          type="text"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="E.g. Peanut butter"
          required
        />
      </div>

      {/* Macros section */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Calories (kcal)</label>
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter calories"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Amount (g)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter grams"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Proteins (g)
          </label>
          <input
            type="number"
            name="proteins"
            value={formData.proteins}
            onChange={handleChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter proteins in grams"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Carbohydrates (g)
          </label>
          <input
            type="number"
            name="carbohydrates"
            value={formData.carbohydrates}
            onChange={handleChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter carbs in grams"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Fats (g)</label>
          <input
            type="number"
            name="fats"
            value={formData.fats}
            onChange={handleChange}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter fats in grams"
            required
          />
        </div>
      </div>

      {/* submit */}
      <button
        type="submit"
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Log Food
      </button>
    </form>
  );
}
