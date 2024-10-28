import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Testi from "../ui/Testi";

export default function SectionTesti() {
  const data = [
    {
      foto: "/mentor2.jpg",
      nama: "Meisy M.",
      icons: "/star.svg",
      deskripsi:
        "Learning Korean here is so much fun! The tutors are friendly and always motivate me. I also like the learning method, it's not boring when learning. Now, I can speak Korean for everyday sentences. Here, I can also exchange ideas with mentors because they are also scholarship awardees in Korea and I can ask them to give me advice on my essay.",
    },
    {
      foto: "/mentor3.jpg",
      nama: "Jeje A.",
      icons: "/star.svg",
      deskripsi:
        "I am very happy to take an online English course here. The tutors are very experienced and patient in teaching. The learning materials are also interesting and easy to understand. Thanks to this course, my English skills have improved rapidly and I am now more confident in communicating with foreigners.",
    },
    {
      foto: "/mentor5.jpg",
      nama: "Cici L.",
      icons: "/star.svg",
      deskripsi:
        "The 1-on-1 sessions with the mentor really helped me to improve my Korean language skills. My mentor gave me personalized and targeted guidance, so I could focus on my weaknesses and learn more effectively. I highly recommend this place to anyone who wants to learn English & Korean seriously.",
    },
  ];

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section>
      <p className="font-bold text-4xl text-center py-10">
        What Our Students Say
      </p>

      <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-10 justify-center items-stretch gap-6">
        {data.map((item, index) => {
          // Apply different animations based on card position (left, center, right)
          const aosType = index === 1 ? "fade-up" : "fade-down";
          const aosDuration = index === 1 ? "3000" : "1500";
          const aosEasing = index !== 1 ? "linear" : undefined;

          return (
            <div
              key={index}
              data-aos={aosType}
              data-aos-duration={aosDuration}
              data-aos-easing={aosEasing}
            >
              <Testi
                foto={item.foto}
                nama={item.nama}
                icons={item.icons}
                deskripsi={item.deskripsi}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
