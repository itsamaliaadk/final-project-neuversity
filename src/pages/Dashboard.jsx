import React from "react";
import MentorList from "../component/blocks/CardDashboard";
import { Link } from "react-router-dom";

export default function Dashboard({ image, name, univ, certificate, classes }) {
  // const data = [
  //   {
  //     image: "/mentor1.jpg",
  //     name: "Amalia D.K.",
  //     univ: "Awardee of GKS-U University Track Inje University",
  //     certificate: "TOPIK II Level 6",
  //     classes: ["Hangul Class", "Korean 1A"],
  //   },
  //   {
  //     image: "/mentor2.jpg",
  //     name: "Shita A.",
  //     univ: "Awardee of GKS-U University Track Chonnam National University",
  //     certificate: "TOPIK II Level 6",
  //     classes: ["Korean 1B", "Korean 2A"],
  //   },
  //   {
  //     image: "mentor3.jpg",
  //     name: "Khilda V.",
  //     univ: "Awardee of GKS-G Embassy Track Yonsei University",
  //     certificate: "IELTS 8.0",
  //     classes: ["TOPIK II Prep", "English Class"],
  //   },
  //   {
  //     image: "mentor4.jpg",
  //     name: "Bobby S.",
  //     univ: "Awardee of GKS-G University Track Daegu University",
  //     certificate: "IELTS 7.5",
  //     classes: ["TOPIK I Prep", "English Class"],
  //   },
  //   {
  //     image: "mentor5.jpg",
  //     name: "Okky A.",
  //     univ: "Awardee of GKS-G Embassy Track Hanyang University",
  //     certificate: "TOPIK II Level 6",
  //     classes: ["Korean 2B", "English Class"],
  //   },
  //   {
  //     image: "mentor6.jpg",
  //     name: "Gagas P.",
  //     univ: "Awardee of GKS-U Embassy Track Korea University",
  //     certificate: "TOPIK II Level 6",
  //     classes: ["TOPIK I Prep", "TOPIK II Prep"],
  //   },
  // ];

  return (
    <section className="bg-[#F1FAFF]  ">
      <div className="container">
        <div className=" bg-[#222F49] flex w-36 items-start py-1 px-3">
          <Link to="/addmentor" className="mt-1  flex text-white">
            <img src="add.svg" alt="add" />
            <p className="mt-1">Add Mentor</p>
          </Link>
        </div>

        <div className=" pb-10">
          <div className="flex flex-col justify-center items-center px-5 bg-[#222F49] py-10 mb-5">
            <MentorList />
          </div>
        </div>
      </div>
    </section>
  );
}
