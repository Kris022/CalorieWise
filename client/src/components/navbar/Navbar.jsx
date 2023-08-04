import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-white bg-green-600 w-full h-[60px]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-3xl">CalorieWise</h1>
        </div>
        {/* Login */}
        <div className="hidden sm:flex h-full">
          <ul className="flex items-center">
            <Link to="/login" className="h-full flex items-center cursor-pointer hover:bg-green-700">
              <li>Login</li>
            </Link>

            <Link to="/signup" className="h-full flex items-center cursor-pointer hover:bg-green-700">
              <li>Signup</li>
            </Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
