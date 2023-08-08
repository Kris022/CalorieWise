import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import { useLogin } from "../../hooks/useLogin";

import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  const { login } = useLogin();

  const handleDemoLogin = async () => {
    const demoEmail = "jane@mail";
    const demoPassword = "jane123";
    await login({ demoEmail, demoPassword });
  };

  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="text-white bg-green-600 w-full h-[60px]">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/">
          <div className="cursor-pointer">
            <h1 className="text-3xl">CalorieWise</h1>
          </div>
        </Link>
        {/* Login */}
        <div className="hidden sm:flex h-full">
          <ul className="flex items-center">
            {!auth.user ? (
              <>
                <div
                  onClick={handleDemoLogin}
                  className="h-full flex items-center cursor-pointer hover:bg-green-700"
                >
                  <li>Demo User</li>
                </div>

                <Link
                  to="/login"
                  className="h-full flex items-center cursor-pointer hover:bg-green-700"
                >
                  <li>Login</li>
                </Link>

                <Link
                  to="/signup"
                  className="h-full flex items-center cursor-pointer hover:bg-green-700"
                >
                  <li>SignUp</li>
                </Link>
              </>
            ) : (
              <li
                onClick={handleLogout}
                className="h-full flex items-center cursor-pointer hover:bg-green-700"
              >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
