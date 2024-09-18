import React from "react";

export default function CardTesti() {
  return (
    <section>
      <div className="container py-10">
        <h2 className="font-bold text-4xl text-center py-10">
          What Our Students Say
        </h2>

        {/* card 3 atas */}
        <div className="grid grid-cols-3 gap-5">
          {/* card 1 */}
          <div className="max-w-sm bg-white rounded-xl text-start">
            <img
              className="w-full rounded-full"
              src="/mentor1.jpg"
              alt="mentor1"
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold">Meisy M.</h5>

              <div className="flex justify-start gap-3 my-3">
                <img src="/star.svg" alt="star" />
              </div>

              <p>
                Learning Korean here is so much fun! The tutors are friendly and
                always motivate me. I also like the learning method, it's not
                boring when learning. Now, I can speak Korean for everyday
                sentences. Here, I can also exchange ideas with mentors because
                they are also scholarship awardee in Korea and I can ask them to
                give me advice on my essay.
              </p>
            </div>
          </div>

          {/* batas div grid-cols-3 atas */}
        </div>
      </div>
    </section>
  );
}
