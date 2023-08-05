import React from "react";
import phoneImage from "../assets/banana.png"; // Replace with your phone image
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-[92vh] bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl font-semibold text-green-800 mb-8">
              Welcome to CalorieWise!
            </h1>
            <p className="text-xl text-green-600 mb-8">
              Count calories, track macros, and achieve your fitness goals with
              CalorieWise.
            </p>
            <Link to="/signup">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-1/2">
            <div className="relative">
              <img
                src={phoneImage}
                alt="Phone with app screen"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
