import React from "react";

export default function Misi() {
  return (
    <div className="py-40 ">
      <div className="bg-white relative w-full h-auto ">
        <p className="font-bold text-3xl text-center py-5">OUR MISSION</p>

        <div className="flex flex-col pb-10 ">
          <div className="container flex mb-4 md:mb-0">
            <img src="/quote.svg" className="h-10 mt-2" alt="quote" />
            <p className="mt-5 text-lg ">
              At Lingua, our mission is to empower students with the knowledge
              and skills needed to excel in Korean and English. <br />
              We are committed to providing high-quality education, personalized
              support, and a community where learners can thrive.
            </p>
          </div>

          <div className="absolute top-0 right-0 size-32 hidden lg:block ">
            <img
              src="/english.svg"
              className="h-9 absolute left-0 top-5"
              alt="english"
            />
            <img
              src="/korean.svg"
              className="h-9 absolute -left-12 top-16"
              alt="korean"
            />
            <img
              src="/teach.svg"
              className="h-9 absolute right-16 -bottom-0"
              alt="teach"
            />
            <img
              src="/people.svg"
              className="h-9 absolute right-5 top-12"
              alt="people"
            />
          </div>

          <div className="container flex gap-20 lg:hidden justify-center py-3">
            <img src="/english.svg" className="h-9 " alt="english" />
            <img src="/korean.svg" className="h-9 " alt="korean" />
            <img src="/teach.svg" className="h-9 " alt="teach" />
            <img src="/people.svg" className="h-9 " alt="people" />
          </div>
        </div>
      </div>
    </div>
  );
}
