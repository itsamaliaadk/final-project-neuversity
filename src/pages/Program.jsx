import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/program";

export default function ProgramExample() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-[#F1FAFF]">
      <div className="container pb-16">
        <h1 className="font-bold text-4xl text-center py-5" data-aos="fade-up">
          Lingua Flagship
          <br />
          Program
        </h1>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pt-16 gap-4"
          >
            <div
              className={index % 2 === 0 ? "lg:order-2 md:order-2 order-1" : ""}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <CardClass
                title={item.title}
                price={item.price}
                duration={item.duration}
                description={item.description}
                benefits={item.benefits}
                buttonText={item.buttonText}
              />
            </div>
            <div
              className={index % 2 === 0 ? "order-2 md:order-1 lg:order-1" : ""}
              data-aos="fade-up"
            >
              <TableMaterial meetings={item.meetings} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardClass({
  title,
  price,
  duration,
  description,
  benefits,
  buttonText,
}) {
  return (
    <div
      className="container h-auto border border-blue-950 mb-3 w-64 md:w-68 p-4 bg-white rounded-xl shadow-lg"
      data-aos="zoom-in"
    >
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <div className="mx-5 flex mt-2">
        <p className="font-semibold text-xl">{price}</p>
        <span className="text-lg ml-1">{duration}</span>
      </div>
      <p className="text-start mb-3 mt-1 mx-5">{description}</p>
      <ul className="ml-5 space-y-2">
        {benefits
          ? benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2">
                <img src="check1.svg" alt="icon" />
                <span>{benefit}</span>
              </li>
            ))
          : "kosong"}
      </ul>
      <button className="w-full bg-[#222F49] text-white py-2 rounded-full hover:bg-blue-900 transition duration-300 mt-6">
        {buttonText}
      </button>
    </div>
  );
}

function TableMaterial({ meetings }) {
  return (
    <table className="w-full h-full" data-aos="fade-up">
      <thead>
        <tr className="bg-[#1E2538] text-center text-white">
          <th className="border border-blue-950 py-3">THE TH MEETING</th>
          <th className="border border-blue-950">MATERIALS</th>
        </tr>
      </thead>
      <tbody>
        {meetings
          ? meetings.map((meeting, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-[#F1FAFF]" : "bg-[#7D8DA6]"}
              >
                <td className="border border-blue-950 text-center py-1">
                  {meeting.pertemuan}
                </td>
                <td className="border border-blue-950 text-center py-1">
                  {meeting.materials}
                </td>
              </tr>
            ))
          : "kosong"}
      </tbody>
    </table>
  );
}
