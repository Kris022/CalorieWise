import React, { useState } from "react";

import SignupForm from "../components/userForms/SignupForm";
import MacroGoalsForm from "../components/userForms/MacroGoalsForm";

import { useSignup } from "../hooks/useSignup";

import { motion } from "framer-motion";

export default function SignupPage() {

  // probabliy better to seperate them 
  // since these are not using the same form anyway
  // userSignupdata
  // userGoalsData
  const initalUserData = {
    email: "",
    password: "",
    calorieGoal: "",
    carbGoal: "",
    fatGoal: "",
    proteinGoal: "",
    sugarGoal: "",
  };

  const { signup, isLoading, error } = useSignup();

  const [newUser, setNewUser] = useState(initalUserData);
  const [showConfirmMacrosForm, setShowConfirmMacrosForm] = useState(false);

  // Handles submit of the signup form
  const handleSignupFormSubmit = (data) => {
    setNewUser({ ...newUser, ...data });

    setShowConfirmMacrosForm(true);
  };

  const handleMacroGoalsFormSubmit = async (data) => {
    // Make SURE that data has the same fields as initalUserData
    setNewUser({ ...newUser, ...data });

    await signup(newUser);
    await setUserGoals(data);

    // console.log(newUser);
  };

  const setUserGoals = async (data) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}api/goals/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        newUser,
      }),
    });

    const json = res.json();
    if (!res.ok) {
      console.log(error);
    }
    if (res.ok) {
      console.log(json);
    }
  };

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

          {error && <div>{error}</div>}
        </div>
      </div>
    </div>
  );
}
