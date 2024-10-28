import React from "react";

export default function Ads() {
  const handleConsultationClick = () => {
    const whatsappNumber = "+6287794425656";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hello! I would like to know more about courses at Lingua."
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="container pt-5 pb-32">
      <div className="bg-[#5C95D5] grid grid-cols-1 md:grid-cols-2 gap-4 p-10 text-white rounded-3xl">
        <div>
          <p className="font-bold text-3xl">
            Having trouble <br />
            learning Korean <br />
            and English <br />
            because you <br />
            don't have a <br />
            partner?
          </p>
          <p className="my-5">
            When you learn a language at Lingua, you will get a learning partner
            and mentor at the same time.
          </p>
          <button
            type="button"
            onClick={handleConsultationClick}
            className="bg-[#2D446E] hover:bg-blue-950 hover:scale-105 transform transition-all duration-300 p-3 rounded-lg shadow-lg"
          >
            Free Consultation
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img src="/mentoring.jpg" className="rounded-lg" alt="mentoring" />
        </div>
      </div>
    </div>
  );
}
