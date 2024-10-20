import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="pl-4 pr-20 py-2 rounded-full w-full shadow-sm border border-gray-300 focus:outline-none focus:border-blue-950"
      />
      {searchTerm && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-2 text-gray-500 focus:outline-none"
        >
          &#x2715; {/* This is the 'X' symbol */}
        </button>
      )}
    </div>
  );
};

export default SearchBar;
