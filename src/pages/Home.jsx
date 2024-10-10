import React from "react";
import SectionHero from "../component/blocks/SectionHero";
import SectionChoose from "../component/blocks/SectionChoose";
import SectionTesti from "../component/blocks/SectionTesti";
import SectionMentors from "../component/blocks/SectionMentors";

export default function Home() {
  return (
    <div className="bg-[#F1FAFF]">
      {/* pemanggilan konten2 dari component */}
      <SectionHero />
      <SectionChoose />
      <SectionMentors />
      <SectionTesti />
    </div>
  );
}
