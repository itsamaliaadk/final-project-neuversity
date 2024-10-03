import React from "react";

export default function Values({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-8 text-center flex flex-col items-center justify-center">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <p className="text-xl font-medium mb-2">{title}</p>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
