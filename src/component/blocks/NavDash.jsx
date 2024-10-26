import React from "react";
import SearchBar from "../ui/Search";
import ButtonLogout from "../ui/ButtonLogout";

export default function NavDash() {
  return (
    <nav className="bg-[#F1FAFF] py-5">
      <div className="container grid grid-cols-3 gap-2 justify-between items-center ">
        <div>
          <img
            src="/logo-blue.svg"
            className="lg:h-10 md:h-10 sm:h-8 h-8  "
            alt="logo"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center  ">
          <img
            src="/search.svg"
            className="h-8 mt-1 mx-3 hidden md:block"
            alt="search"
          />
          <SearchBar />
        </div>

        <div className="justify-end flex">
          <ButtonLogout />
        </div>
      </div>
    </nav>
  );
}

// blm responsive
