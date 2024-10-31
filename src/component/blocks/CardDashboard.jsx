import React from "react";
import ButtonEdit from "../ui/ButtonEdit"; // Importing ButtonEdit component from the UI folder for edit button functionality

// MentorCard component that receives properties for displaying mentor details
const MentorCard = ({ image, name, univ, certificate, classes }) => {
  return (
    <div className="w-80 px-5 mb-28">
      <div className="border-blue-950 p-3 bg-white rounded-lg border-2 border-solid">
        <img src={image} alt={name} className="w-full h-auto rounded-lg" />{" "}
        {/* Mentor's image */}
        <p className="font-bold text-center text-2xl mb-2">
          {name ? name : "kosong"}{" "}
          {/* Mentor's name or default text if name is empty */}
        </p>
        <p className="w-44 mx-auto text-center">{univ}</p>{" "}
        {/* Mentor's university or program info */}
        <div className="flex justify-center gap-3 my-5">
          <img src="sertf.svg" alt="certificate" /> {/* Certificate icon */}
          {certificate} {/* Displaying the mentor's certificate */}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {classes &&
            classes.map(
              (
                item,
                index /* Displaying each class mentor is offering as a button */
              ) => (
                <button
                  key={index}
                  className="flex justify-center items-center py-2 px-2 gap-1 bg-[#222F49] text-white rounded-full w-full text-xs font-bold"
                >
                  <img src="/star1.svg" alt="star1" className="w-4 h-4" />{" "}
                  {/* Icon inside the button */}
                  {item} {/* Class name */}
                </button>
              )
            )}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <ButtonEdit /> {/* Edit button for mentor details */}
      </div>
    </div>
  );
};

// MentorList component that holds the list of mentor data and renders MentorCard for each mentor
const MentorList = () => {
  const data = [
    // Array of mentor objects containing image, name, university, certificate, and classes information
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
      <div className="justify-center">
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-stretch">
          {data.map((mentor, index) => (
            <MentorCard
              key={index} // Unique key for each mentor card
              image={mentor.image} // Passing mentor image to MentorCard component
              name={mentor.name} // Passing mentor name to MentorCard component
              univ={mentor.univ} // Passing mentor university/program to MentorCard component
              certificate={mentor.certificate} // Passing mentor certificate to MentorCard component
              classes={mentor.classes} // Passing mentor classes to MentorCard component
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MentorList; // Exporting MentorList component as default export
