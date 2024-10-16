import React from "react";
//import ButtonProgram from "../ui/ButtonProgram";
import Price from "../ui/Price.jsx";

export default function SectionPrice() {
  const data = [
    {
      title: "Hangul Class",
      price: "Rp500.000",
      duration: "/ month",
      description: "Memorize the hangul letters and their pronunciation.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "Korean Class 1A",
      price: "Rp750.000",
      duration: "/ month",
      description: "Understand Korean language material 1A.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "Korean Class 1B",
      price: "Rp750.000",
      duration: "/ month",
      description: "Understand Korean language material 1B.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "Korean Class 2A",
      price: "Rp750.000",
      duration: "/ month",
      description: "Understand Korean language material 2A.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "Korean Class 2B",
      price: "Rp750.000",
      duration: "/ month",
      description: "Understand Korean language material 2B.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "TOPIK I Preparation Class",
      price: "Rp950.000",
      duration: "/ month",
      description: "Understand and be able to work on TOPIK I questions.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "TOPIK II Preparation Class",
      price: "Rp1.350.000",
      duration: "/ month",
      description: "Understand and be able to work on TOPIK II questions.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
    {
      title: "English Class",
      price: "Rp800.000",
      duration: "/ month",
      description: "Understand beginner English material.",
      facility: [
        "1-on-1 Mentor",
        "Full zoom premium",
        "Free Scholarship Consultation",
      ],
      buttonText: "Choose this",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <Price
          key={index}
          title={item.title}
          price={item.price}
          duration={item.duration}
          description={item.description}
          facility={item.facility}
          buttonText={item.buttonText}
        />
      ))}
    </div>
  );
}
