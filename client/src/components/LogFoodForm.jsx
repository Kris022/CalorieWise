import { useState } from "react";

export default function LogFoodForm({ onClose }) {
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState("");
  const [proteins, setProteins] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [fats, setFats] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if mealName and calories are not empty
    if (mealName.trim() !== "" && calories.trim() !== "") {
      // Convert calories, proteins, carbohydrates, and fats to numbers
      const caloriesValue = parseInt(calories, 10);
      const proteinsValue = parseInt(proteins, 10);
      const carbohydratesValue = parseInt(carbohydrates, 10);
      const fatsValue = parseInt(fats, 10);
      // Call the onLogCalories function from the parent component with the meal details
      // onLogCalories({
      //   mealName,
      //   calories: caloriesValue,
      //   proteins: proteinsValue,
      //   carbohydrates: carbohydratesValue,
      //   fats: fatsValue,
      // });
      // Reset form fields
      setMealName("");
      setCalories("");
      setProteins("");
      setCarbohydrates("");
      setFats("");

      onClose();
    }
  };

  return (
    <form
    className="w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Add new food</h2>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Food Name</label>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
          placeholder="E.g. Peanut butter"
          required
        />
      </div>

      {/* Macros section */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter the number of calories"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Grams</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Per grams"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Proteins (g)
          </label>
          <input
            type="number"
            value={proteins}
            onChange={(e) => setProteins(e.target.value)}
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
            value={carbohydrates}
            onChange={(e) => setCarbohydrates(e.target.value)}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter carbs in grams"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Fats (g)</label>
          <input
            type="number"
            value={fats}
            onChange={(e) => setFats(e.target.value)}
            className="block w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-green-500 focus:outline-none"
            placeholder="Enter fats in grams"
            required
          />
        </div>
      </div>

      {/* submit */}
      <button
        type="submit"
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Log Food
      </button>
    </form>
  );
}
