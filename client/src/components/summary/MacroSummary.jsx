import { FaWheatAwn } from "react-icons/fa6";
import { MdEggAlt } from "react-icons/md";
import { PiFishSimpleFill } from "react-icons/pi";
import { GiWrappedSweet } from "react-icons/gi";

export default function MacroSummary({ macros }) {
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
            {/* <div className="flex items-center">
              <p className="text-gray-700 font-semibold"> Sugar</p>
              <GiWrappedSweet className="text-gray-700 ml-2" />
            </div> */}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-1">
            <div>
              <p className="text-gray-700">{macros.protein} g</p>
            </div>
            <div>
              <p className="text-gray-700">{macros.carbs} g</p>
            </div>
            <div>
              <p className="text-gray-700">{macros.fats} g</p>
            </div>

            {/* <div>
              <p className="text-gray-700">10 g</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
