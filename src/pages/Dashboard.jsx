import React from "react";
import NavDash from "../component/blocks/NavDash";
import SectionMentors from "../component/blocks/SectionMentors";
import ButtonEdit from "../component/ui/ButtonEdit";

export default function Dashboard() {
  return (
    <section className="bg-[#F1FAFF] text-white">
      <NavDash />
      <div className="container py-10">
        <div className="bg-[#222F49] flex w-36 items-start pl-3 py-1">
          <img src="add.svg" alt="add" />
          <p className="mt-1">Add Mentor</p>
        </div>
        <div className=" container bg-[#222F49] w-full h-screen ">
        {/* <SectionMentors /> */}
        <ButtonEdit />
        </div>

        
      </div>
    </section>
  );
}

// BLM DICEK HASILNYA