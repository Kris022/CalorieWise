import { FiPlus } from "react-icons/fi";

export default function LogMealButton({onClick}) {
  const handleClick = () => {
    onClick();
  }
  return (
    <div className="m-1">
      <button
        className="w-full sm:max-w-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={() => {
          handleClick();
        }}
      >
        <div className="flex justify-center items-center">
          <h3>+</h3>
          <span className="ml-2">Log Calories</span>
        </div>
      </button>
    </div>
  );
}
