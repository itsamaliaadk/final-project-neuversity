import { div, li } from "framer-motion/client";
import React from "react";
import data from "../data/program";

// pemanggilan
export default function ProgramExample() {
  return (
    <div className="bg-[#F1FAFF]">
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
      <ul className="ml-5">
        {benefits
          ? benefits.map(function (benefit, index) {
              return (
                <li key={index}>
                  {benefit}
                  {/* blm sejajar */}
                  <img src="check1.svg" alt="icons" />
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
    <table>
      <tr>
        <th className="border border-black">pertemuan ke</th>
        <th className="border border-black">materi</th>
      </tr>

      {meetings
        ? meetings.map(function (meeting, index) {
            return (
              <tr key={index}>
                <td className="border border-black">{meeting.pertemuan}</td>
                <td className="border border-black">{meeting.materials}</td>
              </tr>
            );
          })
        : "kosong"}
    </table>
  );
}
