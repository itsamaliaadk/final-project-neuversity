import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="container mx-auto px-4">
      <p className="font-bold text-4xl text-center py-10" data-aos="fade-up">
        Why Choose Lingua?
      </p>

      {/* Desktop Layout */}
      <div className="container hidden lg:grid lg:grid-cols-3 gap-6 py-10">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <Choose title={item.title} description={item.description} />
          </div>
        ))}
        <div className="container mx-auto flex col-span-3 lg:px-48 gap-6 px-40">
          {data.slice(3, 5).map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${(index + 3) * 100}`}
            >
              <Choose title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>

      {/* Medium and Small Screen Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 lg:hidden">
        {data.slice(0, isExpanded ? data.length : 4).map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <Choose title={item.title} description={item.description} />
          </div>
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
