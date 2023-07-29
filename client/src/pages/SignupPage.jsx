import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import ConfirmMacrosForm from "../components/ConfirmMacrosForm";

export default function SignupPage() {
  const [showConfirmMacrosForm, setShowConfirmMacrosForm] = useState(false);

  const handleSignupFormSubmit = () => {
    setShowConfirmMacrosForm(true);
  };

  return (
    <div className="min-h-screen bg-green-200 flex justify-center items-center">
      <div className="flex flex-col items-center">
          {!showConfirmMacrosForm && <SignupForm onSignup={handleSignupFormSubmit} /> }

        <div
          className={`${
            showConfirmMacrosForm
              ? "transition-transform duration-500 mt-4 translate-y-0"
              : "translate-y-full"
          }`}
        >
          {showConfirmMacrosForm && <ConfirmMacrosForm />}
        </div>
      </div>
    </div>
  );
}
