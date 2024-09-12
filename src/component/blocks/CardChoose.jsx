import React from "react";

export default function CardChoose() {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-4xl text-center py-10">
          Why Choose Lingua?
        </h2>

        {/* card atas 3 */}
        <div className="grid grid-cols-3 text-center">
          <div className="card-1 bg-white w-72 h-56 ml-auto rounded-2xl">
            <p className="font-bold text-2xl py-3">
              An Interesting <br />
              Curriculum
            </p>
            <p className="px-5">
              Korean and English language materials are arranged in an
              interesting way with international standards
            </p>
          </div>
          <div className="card-2 bg-white w-72 h-56 ml-10 rounded-2xl">
            <p className="font-bold text-2xl py-3">
              1-on-1 <br />
              with Mentor
            </p>
            <p className="px-5">
              You will get 1 mentor who will focus on your needs and learning
              style, so you get the right and appropriate guidance
            </p>
          </div>
          <div className="card-3 bg-white w-72 h-56 gap-10 rounded-2xl">
            <p className="font-bold text-2xl py-3">
              Flexibility of <br />
              Time and Place
            </p>
            <p className="px-5">
              Arrange your study schedule according to your busy schedule, and
              enjoy the flexibility of studying anytime and anywhere
            </p>
          </div>
        </div>

        {/* card bawah 2 */}
        <div className="grid grid-cols-2 text-center my-20 gap-10">
          <div className="card-4 bg-white w-72 h-56 ml-auto rounded-2xl">
            <p className="font-bold text-2xl py-3">
              Affordable <br />
              Cost
            </p>
            <p className="px-5">
              Lingua offers high-quality access to Korean & English courses at
              affordable and cost-effective prices
            </p>
          </div>
          <div className="card-5 bg-white w-72 h-56 rounded-2xl">
            <p className="font-bold text-2xl py-3">
              Experienced <br />
              Mentor
            </p>
            <p className="px-5">
              All mentors at Lingua are overseas scholarship recipients and have
              TOPIK & IELTS / TOEFL certificates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* div - grid - text biasa */
