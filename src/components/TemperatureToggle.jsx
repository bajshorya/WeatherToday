// TemperatureToggle.jsx
import React, { useState } from "react";

const TemperatureToggle = ({ onToggle }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
    onToggle(!isCelsius);
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-black-200 p-2 rounded color-white border border-b py-5 my-1"
    >
      {isCelsius ? "Switch to °F" : "Switch to °C"}
    </button>
  );
};

export default TemperatureToggle;
