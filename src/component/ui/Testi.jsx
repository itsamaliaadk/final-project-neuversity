import React, { useState } from "react";

export default function Testi({ foto, nama, icons, deskripsi }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-5 mb-28">
      <div className="border border-blue-950 bg-white text-star h-full p-6 rounded-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
        <img src={foto} className="rounded-full h-28 w-28 object-cover overflow-hidden" alt="foto" />
        <p className="mt-5">{nama ? nama : "kosong"}</p>
        <img src={icons} className="my-4" alt="stars" />
        <p className={`${isExpanded ? '' : 'line-clamp-5'} transition-all`}>
          {deskripsi}
        </p>
        <button 
          className="mt-4 text-blue-600 hover:underline"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
