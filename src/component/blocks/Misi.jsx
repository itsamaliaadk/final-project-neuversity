import React from "react";

export default function Misi() {
  return (
    <div className="py-40">
      <div className="bg-white w-full h-auto md:h-52">
        <p className="font-bold text-3xl text-center py-5">OUR MISSION</p>
        <div className="flex flex-col md:flex-row">
          <div className="container flex mb-4 md:mb-0">
            <img src="/quote.svg" className="h-10 mt-2" alt="quote" />
            <p className="mt-5">
              At Lingua, our mission is to empower students with the knowledge
              and skills needed to excel in Korean and English. We are committed
              to providing high-quality education, personalized support, and a
              community where learners can thrive.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 col-end-4 mr-0 md:mr-20">
            <img src="/english.svg" className="h-10" alt="english" />
            <img src="/korean.svg" className="h-10" alt="korean" />
            <img src="/teach.svg" className="h-10" alt="teach" />
            <img src="/people.svg" className="h-10" alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
}

// icon blm sesuai
