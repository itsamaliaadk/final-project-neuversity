import React from "react";
import ButtonEdit from "../ui/ButtonEdit";

const MentorCard = ({ image, name, univ, certificate, classes }) => {
  return (
    <div className=" w-80 px-5 mb-28">
      <div className="border-blue-950 p-3 bg-white rounded-lg border-2 border-solid">
        <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        <p className="font-bold text-center text-2xl mb-2">
          {name ? name : "kosong"}
        </p>
        <p className="w-44 mx-auto text-center">{univ}</p>

        <div className="flex justify-center gap-3 my-5">
          <img src="sertf.svg" alt="certificate" />
          {certificate}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {classes &&
            classes.map((item, index) => (
              <button
                key={index}
                className="flex justify-center items-center py-2 px-2 gap-1 bg-[#222F49] text-white rounded-full w-full text-xs font-bold"
              >
                <img src="/star1.svg" alt="star1" className="w-4 h-4" />
                {item}
              </button>
            ))}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <ButtonEdit />
      </div>
    </div>
  );
};

const MentorList = () => {
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
      univ: "Awardee of GKS-U University Track Dong-A University",
      certificate: "TOPIK II Level 6",
      classes: ["Korean 1B", "Korean 2A"],
    },
    {
      image: "/mentor3.jpg",
      name: "Khilda V.",
      univ: "Awardee of GKS-G Embassy Track Yonsei University",
      certificate: "IELTS 8.0",
      classes: ["TOPIK II Prep", "English Class"],
    },
    {
      image: "/mentor4.jpg",
      name: "Bobby S.",
      univ: "Awardee of GKS-G University Track Daegu University",
      certificate: "IELTS 7.5",
      classes: ["TOPIK I Prep", "English Class"],
    },
    {
      image: "/mentor5.jpg",
      name: "Okky A.",
      univ: "Awardee of GKS-G Embassy Track Hanyang University",
      certificate: "TOPIK II Level 6",
      classes: ["Korean 2B", "English Class"],
    },
    {
      image: "/mentor6.jpg",
      name: "Gagas P.",
      univ: "Awardee of GKS-U Embassy Track Korea University",
      certificate: "TOPIK II Level 6",
      classes: ["TOPIK I Prep", "TOPIK II Prep"],
    },
  ];

  return (
    <>
      <div>
        <div className="grid grid-cols-3 justify-center">
          {data.map((mentor, index) => (
            <MentorCard
              key={index}
              image={mentor.image}
              name={mentor.name}
              univ={mentor.univ}
              certificate={mentor.certificate}
              classes={mentor.classes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorList;
