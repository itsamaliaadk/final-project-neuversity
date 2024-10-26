import React from "react";

export default function Form() {
  return (
    <section className="outline outline-blue-950 bg-white p-5 rounded-lg w-full md:w-96 mx-auto">
      <form className="max-w-sm mx-auto ">
        <div className="mb-5">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-black"
          >
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
            required=""
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
            required=""
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-3 text-sm font-medium text-black"
          >
            What program are you interested in :
          </label>
          <select
            id="countries"
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option selected="">Choose the program</option>
            <option value="HC">Hangeul Class</option>
            <option value="1A">Korean Class 1A</option>
            <option value="1B">Korean Class 1B</option>
            <option value="2A">Korean Class 2A</option>
            <option value="topik1">TOPIK I Preparation Class</option>
            <option value="topik2">TOPIK II Preparation Class</option>
            <option value="Eng">English Class</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-300 "
            placeholder="Leave a message..."
            defaultValue={""}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#2D446E] hover:bg-blue-950 font-medium rounded-lg text-sm w-full   py-2.5 text-center mt-5"
        >
          Send
        </button>
      </form>
    </section>
  );
}
