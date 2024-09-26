import React from "react";
import Mentors from "../ui/Mentors";

export default function SectionMentors() {
  // data
  const data = [
    {
      image: "/mentor1.jpg",
      name: "Amalia D.K.",
      univ: "Awardee of GKS-U University Track Inje University",
      certificate: "TOPIK II Level 6",
      classes: ["Hangul Class", "Korean 1A"],
    },
    {
      image: "/mentor2.jpg",
      name: "Shita A.",
      univ: "Awardee of GKS-U University Track Chonnam National University",
      certificate: "TOPIK II Level 6",
      classes: ["Korean 1B", "Korean 2A"],
    },
    {
      image: "mentor3.jpg",
      name: "Khilda V.",
      univ: "Awardee of GKS-G Embassy Track Yonsei University",
      certificate: "IELTS 8.0",
      classes: ["TOPIK II Prep", "English Class"],
    },
    {
      image: "mentor4.jpg",
      name: "Bobby S.",
      univ: "Awardee of GKS-G University Track Daegu University",
      certificate: "IELTS 7.5",
      classes: ["TOPIK I Prep", "English Class"],
    },
    {
      image: "mentor5.jpg",
      name: "Okky A.",
      univ: "Awardee of GKS-G Embassy Track Hanyang University",
      certificate: "TOPIK II Level 6",
      classes: ["Korean 2B", "English Class"],
    },
    {
      image: "mentor6.jpg",
      name: "Gagas P.",
      univ: "Awardee of GKS-U Embassy Track Korea University",
      certificate: "TOPIK II Level 6",
      classes: ["TOPIK I Prep", "TOPIK II Prep"],
    },
  ];

  return (
    <section>
      <p className="font-bold text-4xl text-center py-10">Mentors at Lingua</p>

      <div className="mx-auto px-20 py-10 flex flex-wrap justify-center items-center">
        {data.map((item, index) => (
          <Mentors
            key={index}
            image={item.image}
            name={item.name}
            univ={item.univ}
            certificate={item.certificate}
            classes={item.classes}
          />
        ))}
      </div>
    </section>
  );
}

//      {/* card mentors */}
//      <div className="mx-auto px-20 py-10 grid grid-cols-3 gap-5">
