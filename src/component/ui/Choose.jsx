import React from 'react'

export default function Choose({ title, description }) {
  // data
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
    // styling card
    <div className="border bg-white p-20">
      <p>{title ? title : "kosong"}</p>
      <p>{description}</p>
    </div>
  );
}

// blm muncul == kosong
