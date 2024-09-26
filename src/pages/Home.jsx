import React from "react";
import SectionHero from "../component/blocks/SectionHero";
import CardChoose from "../component/blocks/CardChoose";
import CardMentors from "../component/blocks/CardMentors";
import CardTesti from "../component/blocks/CardTesti";
import Mentors from "../component/ui/Mentors";
import Choose from "../component/ui/Choose";
import Testi from "../component/ui/Testi";
import SectionChoose from "../component/blocks/SectionChoose";

export default function Home() {
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
    <div className="bg-[#F1FAFF]">
      {/* pemanggilan konten2 dari component */}
      <SectionHero />
      <CardChoose />
      <SectionChoose />
      <CardMentors />

      {/* card mentors */}
      <div className="mx-auto px-20 py-10 grid grid-cols-3 gap-5">
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

      <CardTesti />

      <div className="mx-auto px-20 py-10 grid grid-cols-3 gap-5">
        {data.map((item, index) => (
          <Testi
            key={index}
            foto={item.foto}
            nama={item.name}
            icons={item.icons}
            deskripsi={item.deskripsi}
          />
        ))}
      </div>
    </div>
  );
}
