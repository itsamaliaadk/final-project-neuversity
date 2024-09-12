import React from "react";

export default function CardMentors() {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-4xl text-center py-10">
          Mentors at Lingua
        </h2>

        <div className="grid grid-cols-3">
          {/* card 3 atas */}
          {/* card 1 */}
          {/* flowbite, tp blm di install tp udh bisa muncul */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
            <a href="#">
              <img className="rounded-t-lg" src="/mentor1.jpg" alt="mentor1" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Amalia D. K.
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Awardee of GKS-UIC <br />
                University Track <br />
                Soonchunhyang <br />
                University
              </p>
              {/* icon sert + sertf bahasa */}
              {/* dibuat 1 div buat sertif */}
              {/* DIBUAT DIV 1 BUAT FULL, TRS FOTO, DIV ANAKAN KONTEN2 SELANJUTNYA */}
              <div className="flex justify-center gap-3">
                <img src="/sertf.svg" alt="certificate" />
                <p className="">TOPIK II Level 6</p>
              </div>

              {/* button buat program kelas */}
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* card 2 manual, blm jadi */}
          <div className="card-1 bg-white w-72 h-56 ml-auto rounded-2xl">
            <img src="/mentor1.jpg" alt="mentor1" />
            <p className="font-bold text-2xl py-3">
              An Interesting <br />
              Curriculum
            </p>
            <p className="px-5">
              Korean and English language materials are arranged in an
              interesting way with international standards
            </p>
          </div>

          {/* batas div grid-cols-3 atas */}
        </div>
        {/* 1 div container atas full 1 konten halaman */}
      </div>
    </section>
  );
}
