import { div, li } from "framer-motion/client";
import React from "react";
import data from "../data/program";

// pemanggilan
export default function ProgramExample() {
  return (
    <div className="bg-[#F1FAFF] container">
      {data.map(function (item, index) {
        return (
          <div key={index} className="grid grid-cols-2 pt-10">
            <div className={index % 2 == 0 ? "order-2" : ""}>
              <CardClass
                title={item.title}
                price={item.price}
                duration={item.duration}
                description={item.description}
                benefits={item.benefits}
                buttonText={item.buttonText}
              />
            </div>
            <div className={index % 2 == 0 ? "order-1" : ""}>
              <TableMaterial meetings={item.meetings} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// desain card
function CardClass({
  title,
  price,
  duration,
  description,
  benefits,
  buttonText,
}) {
  return (
    <div className="border border-blue-950 mb-3 w-72 p-5 bg-white rounded-xl shadow-lg">
      <h1 className="font-bold text-2xl text-center mb-4">{title}</h1>
      <div className="mx-5 flex my-3">
        <p className="font-semibold text-xl">{price}</p>
        <span className="text-lg ml-1">{duration}</span>
      </div>

      <p className="text-start mb-4 mx-5">{description}</p>
      <ul className="ml-5 space-y-2">
        {benefits
          ? benefits.map(function (benefit, index) {
              return (
                <li key={index} className="flex items-center space-x-2">
                  <img src="check1.svg" alt="icons" />
                  <span>{benefit}</span>
                </li>
              );
            })
          : "kosong"}
      </ul>
      <button className="w-full bg-[#222F49] text-white py-2 rounded-full hover:bg-blue-900 transition duration-300 mt-10">
        {buttonText}
      </button>
    </div>
  );
}

// desain table
function TableMaterial({ meetings }) {
  return (
    <table className="w-10/12">
      <tr className="bg-[#1E2538] text-center text-white ">
        <th className="border border-blue-950 py-3">THE TH MEETING</th>
        <th className="border border-blue-950">MATERIALS</th>
      </tr>

      {meetings
        ? meetings.map(function (meeting, index) {
            return (
              <tr key={index} className={index % 2 === 0 ? "bg-[#F1FAFF" : "bg-[#7D8DA6]"}>
                <td className="border border-blue-950 text-center py-1">{meeting.pertemuan}</td>
                <td className="border border-blue-950 text-center py-1">{meeting.materials}</td>
              </tr>
            );
          })
        : "kosong"}
    </table>
  );
}

// nyamain tabelnya