import React from "react";

export default function SectionHero() {
  const handleConsultationClick = () => {
    const whatsappNumber = "+6287794425656";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hello! I am interested in language courses at Lingua."
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container grid md:grid-cols-2 p-10 gap-10 ">
      <div className="hero order-1 md:order-1">
        <img src="/hero.svg" alt="hero" />
      </div>

      <div className="desc ml-10 order-2 md:order-2">
        <p className="font-bold text-2xl lg:text-5xl ">
          Achieve Your Global Dreams with Online Korean & English <br />
          Courses with <br />
          Lingua
        </p>
        <p className="my-9">
          Get a golden opportunity to get an overseas scholarship with thorough
          preparation with our expert tutors. <br />
          Open the gate to a bright future!
        </p>

        <button
          type="button"
          onClick={handleConsultationClick}
          className="bg-[#2D446E] rounded-lg px-5 p-2 text-white hover:bg-blue-950 hover:scale-105 transform transition-all duration-300 shadow-lg"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
