import React from "react";

export default function CardMentors() {
  return (
    <section>
      <div className="container my-10">
        <h2 className="font-bold text-4xl text-center py-10">
          Mentors at Lingua
        </h2>

        {/* card 3 atas */}
        <div className="grid grid-cols-3 gap-5">
          {/* card 1 */}
          <div className="max-w-sm bg-white border border-blue-950 rounded-lg text-center">
            <img
              className="w-full rounded-t-lg"
              src="/mentor1.jpg"
              alt="mentor1"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Amalia D. K.
              </h5>

              <p className="mb-3 font-normal ">
                Awardee of GKS-U <br />
                University Track <br />
                Inje University
              </p>

              <div className="flex justify-center gap-3 mb-8 items-center">
                <img src="/sertf.svg" alt="certificate" />
                <p className="text-gray-500">TOPIK II Level 6</p>
              </div>

              {/* button buat program kelas */}
              <div className="flex justify-center gap-3">
                {/* Hangul Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center py-3"
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Hangul Class
                </button>

                {/* Korean 1A Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center "
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Korean 1A
                </button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="max-w-sm bg-white border border-blue-950 rounded-lg text-center">
            <img
              className="w-full rounded-t-lg"
              src="/mentor1.jpg"
              alt="mentor1"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Amalia D. K.
              </h5>

              <p className="mb-3 font-normal ">
                Awardee of GKS-U <br />
                University Track <br />
                Inje University
              </p>

              <div className="flex justify-center gap-3 mb-8 items-center">
                <img src="/sertf.svg" alt="certificate" />
                <p className="text-gray-500">TOPIK II Level 6</p>
              </div>

              {/* button buat program kelas */}
              <div className="flex justify-center gap-3">
                {/* Hangul Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center py-3"
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Hangul Class
                </button>

                {/* Korean 1A Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center "
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Korean 1A
                </button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="max-w-sm bg-white border border-blue-950 rounded-lg text-center">
            <img
              className="w-full rounded-t-lg"
              src="/mentor1.jpg"
              alt="mentor1"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                Amalia D. K.
              </h5>

              <p className="mb-3 font-normal ">
                Awardee of GKS-U <br />
                University Track <br />
                Inje University
              </p>

              <div className="flex justify-center gap-3 mb-8 items-center">
                <img src="/sertf.svg" alt="certificate" />
                <p className="text-gray-500">TOPIK II Level 6</p>
              </div>

              {/* button buat program kelas */}
              <div className="flex justify-center gap-3">
                {/* Hangul Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center py-3"
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Hangul Class
                </button>

                {/* Korean 1A Class Button */}
                <button
                  type="button"
                  className="text-white bg-[#222F49] font-medium rounded-full text-sm p-2 px-6 flex items-center "
                  disabled=""
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                    />
                  </svg>
                  Korean 1A
                </button>
              </div>
            </div>
          </div>

          {/* batas div grid-cols-3 atas */}
        </div>
        {/* 1 div container atas full 1 konten halaman */}
      </div>
    </section>
  );
}

/* flowbite, tp blm di install tp udh bisa muncul */

//BLM RESPONSIVE + SIZENYA KEBESARAN
