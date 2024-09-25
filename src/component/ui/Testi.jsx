import React from "react";

export default function Testi({ foto, nama, icons, deskripsi }) {
  const data = [
    {
      foto: "mentor2.jpg",
      nama: "Meisy M.",
      icons: "/star.svg",
      deskripsi:
        "Learning Korean here is so much fun! The tutors are friendly and always motivate me. I also like the learning method, it's not boring when learning. Now, I can speak Korean for everyday sentences. Here, I can also exchange ideskripsias with mentors because they are also scholarship awardee in Korea and I can ask them to give me advice on my essay.",
    },
    {
      foto: "/mentor3.jpg",
      nama: "Jeje A.",
      icons: "/star.svg",
      deskripsi:
        "I am very happy to take an online English course here. The tutors are very experienced and patient in teaching. The learning materials are also interesting and easy to understand. Thanks to this course, my English skills have improved rapidly and I am now more confident in communicating with foreigners.",
    },
    {
      foto: "/mentor2.jpg",
      nama: "Cici L.",
      icons: "/star.svg",
      deskripsi:
        "The 1-on-1 sessions with the mentor really helped me to improve my Korean language skills. My mentor gave me personalized and targeted guidance, so I could focus on my weaknesses and learn more effectively. I highly recommend this place to anyone who wants to learn English & Korean seriously.",
    },
  ];

  return (
    <div classnama="border border-blue-950 bg-white">
      <img src={foto} alt="foto" />
      <p>{nama ? nama : "kosong"}</p>
      <img src="star1.svg" alt="star" />
      <p>{deskripsi}</p>
    </div>
  );
}

// blm muncul
