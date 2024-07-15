import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import TemperatureToggle from "./TemperatureToggle";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import SearchHistory from "./SearchHistory";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Fetch weather data from API
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    const apiKey = "5fc03a6cb9d15d408e95d82a1c334725"; // Replace with your API key
    const unit = isCelsius ? "metric" : "imperial";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
      setSearchHistory([...searchHistory, city]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle temperature unit toggle
  const handleToggle = (isCelsius) => {
    setIsCelsius(isCelsius);
  };

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 bg-black text-white">
      <SearchBar onSearch={fetchWeatherData} />
      <TemperatureToggle onToggle={handleToggle} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <WeatherCard
          city={weatherData.city}
          temperature={weatherData.temperature}
          description={weatherData.description}
          icon={weatherData.icon}
        />
      )}
      <SearchHistory history={searchHistory} onSelect={fetchWeatherData} />
      <div className="mt-4 text-center">
        Current Time: {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Weather;
