import React from "react";

export default function Form() {
  return (
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
      </div>

      {/* label, input program yg mau dipilih */}

      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-black"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a message..."
        defaultValue={""}
      />

      <button
        type="submit"
        className="text-white bg-[#2D446E] hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5 justify-items-center"
      >
        Send
      </button>
    </form>
  );
}
