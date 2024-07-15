import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");

  const handleSearch = () => {
    if (cityName.trim() !== "") {
      onSearch(cityName);
    }
  };

  return (
    <div className="w-full px-4">
      {" "}
      {/* Ensure full width and padding for responsiveness */}
      <div className="w-full text-sm font-medium text-left py-2">
        Enter city name:
      </div>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-l border-gray-300 focus:outline-none focus:border-blue-500 text-black" // Use flex-grow and rounded-l
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600" // Use rounded-r
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
