import React from "react";

export default function Hero2() {
  return (
    <div className="container grid grid-cols-2 p-10 gap-10">
      {/* ini gtw di dlm div / gmn soalnya judul */}
      <p className="font-bold text-4xl">About Us</p>

      {/* description */}
      <div className="ml-10">
        <p>
          We are an online Korean & English language course platform with
          extensive experience and passion in the world of language education.
          Our tutors are overseas scholarship recipients who have in-depth
          knowledge of English & Korean. They are not only experts in the
          language field, but also have experience studying and living abroad,
          so they understand the needs and challenges of language learners very
          well.
        </p>
      </div>

      {/* hero */}
      <div>
        <img src="/hero-2.svg" alt="hero2" />
      </div>
    </div>
  );
}
