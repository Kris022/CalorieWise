import { FiPlus } from "react-icons/fi";

export default function LogMealButton() {
  return (
      <div className="text-4xl mb-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          onClick={() => {
            // Add logic to open a modal or form to log the meal details
            console.log("Meal logged!"); // Replace this with your actual logic
          }}
        >
          <FiPlus />
        </button>
      </div>
  );
}
