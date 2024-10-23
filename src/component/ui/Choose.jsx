import React from "react";

export default function Choose({ title, description }) {
  return (
    <div className="w-full  px-3 mb-8" data-aos="zoom-out-up">
      <div className="bg-white p-6 text-center h-full rounded-3xl">
        <p className="font-bold text-2xl py-3 w-2/3 mx-auto">{title}</p>
        <p className="px-5">{description}</p>
      </div>
    </div>
  );
}
