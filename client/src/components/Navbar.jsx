import { useState } from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  // Assuming you have a state or context for login status and user information
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("Joe Doe");

  // Function to handle user logout (clear login status and user information)
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    // Add any additional logic for user logout as needed
  };

  return (
    <nav className="bg-green-600 p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          CalorieWise
        </Link>
        <div>
          {isLoggedIn ? ( // Conditionally render content based on login status
            <Link to="/profile">
              <div className="flex items-center">
                <FaUserCircle size={24} className="text-white" />
                <span className="text-white ml-2">{username}</span>
                {/* <button onClick={handleLogout} className="text-white">
                Logout
              </button> */}
              </div>
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
