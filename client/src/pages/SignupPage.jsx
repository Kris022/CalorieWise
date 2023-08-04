import React, { useState } from "react";

import SignupForm from "../components/userForms/SignupForm";
import MacroGoalsForm from "../components/userForms/MacroGoalsForm";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export default function SignupPage() {
  const initalUserData = {
    email: "",
    password: "",
    calorieGoal: "",
    carbGoal: "",
    fatGoal: "",
    proteinGoal: "",
    sugarGoal: "",
  };

  const [newUser, setNewUser] = useState(initalUserData);
  const [showConfirmMacrosForm, setShowConfirmMacrosForm] = useState(false);
  const navigate = useNavigate();

  // Handles submit of the signup form
  const handleSignupFormSubmit = (data) => {
    setNewUser({ ...newUser, ...data });

    setShowConfirmMacrosForm(true);
  };

  const handleMacroGoalsFormSubmit = (data) => {
    // Make SURE that data has the same fields as initalUserData
    setNewUser({ ...newUser, ...data });

    console.log(newUser);
    // if signup succesfull go to /dashboard
    // navigate("/dashboard");
  };

  const submitData = async (data) => {
	
  }

  return (
    <div className="max-w-7xl mx-auto h-[91vh]">
      <div className="max-w-xl p-2 mx-auto">
        <div className="flex justify-center mt-8 items-center">
          {!showConfirmMacrosForm && (
            <div className="w-full flex justify-center">
              <SignupForm onSignup={handleSignupFormSubmit} />
            </div>
          )}

          {showConfirmMacrosForm && (
            <div className="w-full flex justify-center">
              <MacroGoalsForm onSubmit={handleMacroGoalsFormSubmit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
