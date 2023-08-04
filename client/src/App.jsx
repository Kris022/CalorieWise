import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "./utils/utils";
import { loginUser } from "./reducers/authSlice";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const userInStorage = getUserFromLocalStorage();
    if (userInStorage) {
      // Update global state with user token
      dispatch(loginUser(userInStorage));
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={!auth.user ? <LandingPage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signup"
            element={!auth.user ? <SignupPage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/login"
            element={!auth.user ? <LoginPage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={auth.user ? <DashboardPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
