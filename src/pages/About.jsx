import React from "react";
import Hero2 from "../component/blocks/Hero2";
import Misi from "../component/blocks/Misi";
import SectionValues from "../component/blocks/SectionValues";

export default function About() {
  return (
    <div className="bg-[#F1FAFF]">
      <Hero2 />
      <Misi />
      <SectionValues />
    </div>
  );
}
