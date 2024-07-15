// WeatherCard.jsx
import React from "react";

const WeatherCard = ({ city, temperature, description, icon }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h2 className="text-xl font-bold">{city}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          className="w-12 h-12 bg-slate-50"
        />
        <div className="ml-4">
          <p className="text-2xl">{temperature}°C</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
