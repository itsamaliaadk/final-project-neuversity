import React from "react";
import Values from "../ui/Values";

export default function SectionValues() {
  const data = [
    {
      icon: "/piala.svg",
      title: "Excellence",
      desc: "We strive for the highest standards in everything we do.",
    },
    {
      icon: "/idea.svg",
      title: "Innovation",
      desc: " We continuously innovate to provide the best learning.",
    },
    {
      icon: "/hand.svg",
      title: "Inclusivity",
      desc: "We believe in creating a learning environment where everyone is welcome.",
    },
    {
      icon: "/community.svg",
      title: "Community",
      desc: "We foster a supportive and collaborative learning community.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
      <div className="pr-36">
        <p className="text-4xl font-bold text-center mt-44">
          OUR <br />
          CORE <br />
          VALUES
        </p>
      </div>

      {/* kurang kekiri lg */}
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        {data.map((value, index) => (
          <Values
            key={index}
            icon={value.icon}
            title={value.title}
            desc={value.desc}
          />
        ))}
      </div>
    </div>
  );
}
