import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import MacroGoalsForm from "../components/MacroGoalsForm";

import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom

import { motion } from "framer-motion";

export default function SignupPage() {
  const [showConfirmMacrosForm, setShowConfirmMacrosForm] = useState(false);
  const navigate = useNavigate();

  const handleSignupFormSubmit = () => {
    setShowConfirmMacrosForm(true);
  };

  const handleMacroGoalsFormSubmit = () => {
    // go to /dashboard
    navigate('/dashboard')
  };

  return (
    <div className="w-full flex justify-center items-center">
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
  );
}
