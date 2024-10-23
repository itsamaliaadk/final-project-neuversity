import React from "react";

export default function Price({
  title,
  price,
  duration,
  description,
  facility,
  buttonText,
}) {
  return (
    <div className="w-80 h-full p-5 ">
      <div className="bg-white rounded-xl py-5 shadow-lg">
        <div>
          <p className="font-bold text-2xl text-center mb-4">{title}</p>
        </div>

        <div className="mx-5 flex justify-start my-3">
          <p className="font-semibold text-xl">{price}</p>
          <span className="text-lg ml-1">{duration}</span>
        </div>

          <p className="container text-start mb-4">{description}</p>


        <div className="mx-5 my-4">
          <ul>
            {facility.map((item, index) => (
              <li key={index} className="flex ">
                <img src="check1.svg" alt="icons" />
                <span className="p-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-5 mt-10">
          <button className="w-full bg-[#222F49] text-white py-2 rounded-full hover:bg-blue-900 transition duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
