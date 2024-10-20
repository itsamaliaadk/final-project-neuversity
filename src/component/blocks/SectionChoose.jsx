import React, { useState } from "react";
import Choose from "../ui/Choose";

export default function SectionChoose() {
  const data = [
    {
      title: "An Interesting Curriculum",
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

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="container mx-auto px-4">
      <p className="font-bold text-4xl text-center py-10">Why Choose Lingua?</p>

      {/* Desktop Layout */}
      <div className="container hidden lg:grid lg:grid-cols-3 gap-6 py-10">
        <Choose title={data[0].title} description={data[0].description} />
        <Choose title={data[1].title} description={data[1].description} />
        <Choose title={data[2].title} description={data[2].description} />

        <Choose
          title={data[3].title}
          description={data[3].description}
          className=""
        />
        <Choose title={data[4].title} description={data[4].description} />
      </div>

      {/* Medium and Small Screen Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 lg:hidden">
        {data.slice(0, isExpanded ? data.length : 4).map((item, index) => (
          <Choose
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <button
        className="mt-4 text-blue-500 hover:underline lg:hidden"
        onClick={handleToggle}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
