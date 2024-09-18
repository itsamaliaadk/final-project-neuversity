import React from "react";

export default function Hero2() {
  return (
    <section className="container">
      <div className="text-center py-10">
        <p className="font-bold text-4xl">About Us</p>
      </div>

      <div className="grid grid-cols-2 gap-10 text-center flex items-center">
        {/* description */}
        <div>
          <p className="text-start">
            We are an online Korean & English language course platform with
            extensive experience and passion in the world of language education.
            Our tutors are overseas scholarship recipients who have in-depth
            knowledge of English & Korean. They are not only experts in the
            language field, but also have experience studying and living abroad,
            so they understand the needs and challenges of language learners
            very well.
          </p>
        </div>

        {/* hero */}
        <div>
          <img src="/hero-2.svg" alt="hero2" />
        </div>
      </div>
    </section>
  );
}
