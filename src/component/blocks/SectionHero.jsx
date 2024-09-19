import React from "react";

export default function SectionHero() {
  return (
    <div className="container grid grid-cols-2 p-10 gap-10">
      {/* hero */}
      <div className="hero">
        <img src="/hero.svg" alt="hero" />
      </div>

      {/* description */}
      <div className="desc ml-10">
        <p className="font-bold text-5xl">
          Achieve Your Global Dreams with Online Korean & English <br />
          Courses with <br />
          Lingua
        </p>
        <p className="my-9">
          Get a golden opportunity to get an overseas scholarship with thorough
          preparation with our expert tutors. <br />
          Open the gate to a bright future!
        </p>

        <button className="bg-[#2D446E] rounded-lg px-5 p-2 text-white">
          Join Now
        </button>
      </div>
    </div>
  );
}
