import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import MacroGoalsForm from "../components/MacroGoalsForm";

import { motion } from "framer-motion";

export default function SignupPage() {
  const [showConfirmMacrosForm, setShowConfirmMacrosForm] = useState(false);

  const handleSignupFormSubmit = () => {
    setShowConfirmMacrosForm(true);
  };

  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center">
      <div className="flex flex-col items-center">
        {!showConfirmMacrosForm && (
          <SignupForm onSignup={handleSignupFormSubmit} />
        )}

        <div>{showConfirmMacrosForm && <MacroGoalsForm />}</div>
      </div>
    </div>
  );
}
