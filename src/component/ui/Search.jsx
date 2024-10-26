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
    <div className=" w-full ">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="px-2 py-2 rounded-full w-full shadow-sm border border-gray-300 focus:outline-none focus:border-blue-950"
      />
    </div>
  );
};

export default SearchBar;
