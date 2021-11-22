import React, { useState } from "react";
import App from "./App";

// Creating Context
export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [childselect, setChildselect] = useState("");
  const [checkvalues, setCheckvalues] = useState("");

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setStep(1);
  }

  return (
    <div>
      {/* Passing values with provider */}
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
          childselect,
          setChildselect,
          checkvalues,
          setCheckvalues,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
