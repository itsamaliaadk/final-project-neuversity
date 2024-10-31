import React from "react"; // Import React library for creating React components
import { motion } from "framer-motion"; // Import motion component from Framer Motion for animations

// Define a functional component named Values that accepts props: icon, title, and desc
export default function Values({ icon, title, desc }) {
  return (
    // motion.div is used as a wrapper to animate the container using Framer Motion properties
    <motion.div
      className="bg-white rounded-lg shadow-md px-6 py-8 text-center flex flex-col items-center justify-center" // Adds styling classes for background, shadow, padding, and centering
      initial={{ opacity: 0, y: 50 }} // Initial animation state with opacity 0 and vertical offset of 50px
      animate={{ opacity: 1, y: 0 }} // Animation target state with full opacity and original position
      transition={{ duration: 0.5, ease: "easeOut" }} // Sets the animation duration to 0.5s with ease-out easing
      whileHover={{ scale: 1.05 }} // Adds a slight scale-up effect when the element is hovered
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />{" "}
      {/* Renders an icon image with width and height, with a margin below */}
      <p className="text-xl font-medium mb-2">{title}</p>{" "}
      {/* Displays the title text with larger font size and margin */}
      <p className="text-gray-700">{desc}</p>{" "}
      {/* Displays the description text with gray color */}
    </motion.div>
  );
}
