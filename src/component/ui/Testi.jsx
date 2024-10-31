import React, { useState } from "react"; // Import React and useState hook from the React library

// Define a functional component named Testi, which receives props: foto, nama, icons, and deskripsi
export default function Testi({ foto, nama, icons, deskripsi }) {
  // Initialize state to manage whether the description text is expanded or not, with a default value of false
  const [isExpanded, setIsExpanded] = useState(false);

  // Define a function to toggle the isExpanded state value between true and false
  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle the state of isExpanded when the function is called
  };

  // Return JSX for rendering the testimonial card
  return (
    <div className="w-full px-5 mb-28">
      {/* Outer container for the testimonial card with border, background, padding, and hover effects */}
      <div className="border border-blue-950 bg-white text-start h-full p-6 rounded-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
        {/* Display user's photo with styling for round shape and object cover */}
        <img
          src={foto} // Source for the image, received from the foto prop
          className="rounded-full h-28 w-28 object-cover overflow-hidden" // Styling for rounded, fixed dimensions, and object-fit
          alt="foto" // Alternative text for the image
        />

        {/* Display user's name or fallback text "kosong" if nama is undefined */}
        <p className="mt-5 font-bold">{nama ? nama : "kosong"}</p>

        {/* Display rating icon received from the icons prop */}
        <img src={icons} className="my-4" alt="stars" />

        {/* Display description text with line-clamp if isExpanded is false */}
        <p className={`${isExpanded ? "" : "line-clamp-4"} transition-all`}>
          {deskripsi}{" "}
          {/* Description content received from the deskripsi prop */}
        </p>

        {/* Button to toggle expanded/collapsed state of the description text */}
        <button
          className="mt-4 text-blue-600 hover:underline" // Styling for button with text color and hover effect
          onClick={toggleExpand} // Calls toggleExpand function on button click
        >
          {isExpanded ? "Show Less" : "Show More"}{" "}
          {/* Display text based on isExpanded state */}
        </button>
      </div>
    </div>
  );
}
