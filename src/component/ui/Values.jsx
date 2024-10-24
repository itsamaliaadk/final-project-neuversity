import React from "react";
import { motion } from "framer-motion";

export default function Values({ icon, title, desc }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md px-6 py-8 text-center flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <p className="text-xl font-medium mb-2">{title}</p>
      <p className="text-gray-700">{desc}</p>
    </motion.div>
  );
}
