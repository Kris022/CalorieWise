import { FaWheatAwn } from "react-icons/fa6";
import { MdEggAlt } from "react-icons/md";
import { PiFishSimpleFill } from "react-icons/pi";

export default function MacroSummary({ proteins, carbohydrates, fats }) {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white h-full">
      <div className="h-full flex items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Daily Macros Info</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center">
              <p className="text-gray-700 font-semibold">Protein</p>
              <MdEggAlt className="text-gray-700 ml-2" />
            </div>

            <div className="flex items-center">
              <p className="text-gray-700 font-semibold"> Carbs</p>
              <FaWheatAwn size={16} className="text-gray-700 ml-2" />
            </div>
            <div className="flex items-center">
              <p className="text-gray-700 font-semibold"> Fats</p>
              <PiFishSimpleFill className="text-gray-700 ml-2" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-1">
            <div>
              <p className="text-gray-700">{proteins} g</p>
            </div>
            <div>
              <p className="text-gray-700">{carbohydrates} g</p>
            </div>
            <div>
              <p className="text-gray-700">{fats} g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
