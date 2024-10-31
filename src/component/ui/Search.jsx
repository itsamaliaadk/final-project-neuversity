import React, { useState } from "react";

const SearchBar = () => {
  // Initialize state to store the search term input value with an empty string as the default
  const [searchTerm, setSearchTerm] = useState("");

  // Define a function to handle changes in the input field and update the search term state
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state with the value entered in the input field
  };

  // Define a function to clear the search term by resetting it to an empty string
  const clearSearch = () => {
    setSearchTerm(""); // Set searchTerm state to an empty string, effectively clearing the input
  };

  // Return JSX for rendering the search bar input field
  return (
    <div className="w-full">
      <input
        type="text" // Specifies the input type as text
        placeholder="Search" // Placeholder text shown when the input is empty
        value={searchTerm} // Sets the input value to searchTerm, making it a controlled component
        onChange={handleChange} // Attaches handleChange function to update the state on input change
        className="px-2 py-2 rounded-full w-full shadow-sm border border-gray-300 focus:outline-none focus:border-blue-950" // Adds styling classes for padding, rounded edges, shadow, border, and focus effects
      />
    </div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application

// useState digunakan untuk menyimpan nilai input yang dimasukkan oleh pengguna. Setiap kali pengguna mengetik sesuatu di dalam kotak pencarian,
// fungsi handleChange memperbarui searchTerm menggunakan setSearchTerm sehingga nilai input sesuai dengan nilai searchTerm.
