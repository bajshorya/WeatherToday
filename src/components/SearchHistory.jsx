// SearchHistory.jsx
import React from "react";

const SearchHistory = ({ history, onSelect }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Search History</h3>
      <ul>
        {history.map((city, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-500"
            onClick={() => onSelect(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
