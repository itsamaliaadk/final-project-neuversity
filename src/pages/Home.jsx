import React from "react";
import SectionHero from "../component/blocks/SectionHero";
import CardChoose from "../component/blocks/CardChoose";
import CardMentors from "../component/blocks/CardMentors";
import CardTesti from "../component/blocks/CardTesti";

export default function Home() {
  return (
    <div className="bg-[#F1FAFF]">
      {/* pemanggilan konten2 dari component */}
      <SectionHero />
      <CardChoose />
      <CardMentors />
      <CardTesti />
    </div>
  );
}
