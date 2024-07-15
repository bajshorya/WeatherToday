// WeatherIcon.jsx
import React from "react";

const WeatherIcon = ({ icon, description }) => {
  return (
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={description}
      className="w-12 h-12 border"
    />
  );
};

export default WeatherIcon;
