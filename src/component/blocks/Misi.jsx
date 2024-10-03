import React from "react";

export default function misi() {
  return (
    <div className="py-40">
      <div className="bg-white w-full h-52">
        <p className="font-bold text-3xl text-center py-5">OUR MISSION</p>

        {/* icons banyak acak */}

        <div className="container flex">
          <img src="/quote.svg" className="h-10 mt-2" alt="quote" />
          <p className="mt-5">
            At Lingua, our mission is to empower students with the knowledge and
            skills needed to excel in Korean and English. We are committed to
            providing high-quality education, personalized support, and a
            community where learners can thrive.
          </p>

          <div>
            <img src="/english.svg" className="" alt="english" />
            <img src="/korean.svg" className="" alt="korean" />
            <img src="/teach.svg" className="" alt="teach" />
            <img src="/people.svg" className="" alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
}

// yg icon lain2 tempatnya blm acak
