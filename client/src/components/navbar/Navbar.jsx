import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-white bg-green-600 w-full h-[60px]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div>
          <h1 className="text-3xl">CalorieWise</h1>
        </div>
        {/* Login */}
        <div className="hidden sm:flex h-full">
          <ul className="flex items-center">
            <li className="h-full flex items-center cursor-pointer hover:bg-green-700">Login</li>
            <li className="cursor-pointer">Signup</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
