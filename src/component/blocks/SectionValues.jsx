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
    <div className="grid grid-cols-2">
      <div>
        <p className="text-4xl">
          OUR <br />
          CORE <br />
          VALUES
        </p>
      </div>

      <div>
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
