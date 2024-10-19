import React from "react";
import Choose from "../ui/Choose";

export default function SectionChoose() {
  const data = [
    {
      title: "An Interesting Curiculum",
      description:
        "Korean and English language materials are arranged in an interesting way with international standards",
    },
    {
      title: "1-on-1 with Mentor",
      description:
        "You will get 1 mentor who will focus on your needs and learning style, so you get the right and appropriate guidance",
    },
    {
      title: "Flexibility of Time and Place",
      description:
        "Arrange your study schedule according to your busy schedule, and enjoy the flexibility of studying anytime and anywhere",
    },
    {
      title: "Affordable Cost",
      description:
        "Lingua offers high-quality access to Korean & English courses at affordable and cost-effective prices",
    },
    {
      title: "Experienced Mentor",
      description:
        "All mentors at Lingua are overseas scholarship recipients and have TOPIK & IELTS / TOEFL certificates",
    },
  ];

  return (
    <section>
      <p className="font-bold text-4xl text-center py-10">Why Choose Lingua?</p>

      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-wrap justify-center items-stretch">
        {data.map((item, index) => (
          <Choose
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
