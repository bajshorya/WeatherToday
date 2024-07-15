// ForecastList.jsx
import React from "react";
import WeatherCard from "./WeatherCard";

const ForecastList = ({ forecasts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {forecasts.map((forecast) => (
        <WeatherCard
          key={forecast.date}
          city={forecast.city}
          temperature={forecast.temperature}
          description={forecast.description}
          icon={forecast.icon}
        />
      ))}
    </div>
  );
};

export default ForecastList;
