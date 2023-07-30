import React, { useState } from "react";
import MacroGoalsForm from "./MacroGoalsForm"; // Import Form2 component
import LogFoodForm from "./LogFoodForm"; // Import Form1 component

const FormSwitcher = () => {
  const [showForm1, setShowForm1] = useState(true);

  const toggleForm1 = () => {
    setShowForm1(true);
  };

  const toggleForm2 = () => {
    setShowForm1(false);
  };

  return (
    <div className="card w-full">

      <div className="form-toggle flex justify-center">
        {/* Buttons to toggle between Form1 and Form2 */}
        <button onClick={toggleForm1} disabled={showForm1}>
          Add Food
        </button>
        <button onClick={toggleForm2} disabled={!showForm1}>
          Form 2
        </button>
      </div>

      {showForm1 ? (
        <div className="form-container">
          {/* Form1 */}
          <LogFoodForm />
        </div>
      ) : (
        <div className="form-container">
          {/* Form2 */}
          <MacroGoalsForm />
        </div>
      )}
    </div>
  );
};

export default FormSwitcher;
