import React from "react";

export default function LoginForm() {
  return (
    <form className="max-w-sm mx-auto bg-white rounded-xl">
      <div className="px-10 pt-10">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required=""
        />
      </div>
      <div className="px-10 pt-5 mb-10">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required=""
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-950 hover:outline-8 font-medium rounded-lg text-sm w-fukk sm:w-auto px-32 py-2.5 text-center mx-10 mb-10"
      >
        Login
      </button>
    </form>
  );
}
