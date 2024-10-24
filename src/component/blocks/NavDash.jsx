import React from "react";
import SearchBar from "../ui/Search";
import ButtonLogout from "../ui/ButtonLogout";

export default function NavDash() {
  return (
    <nav className="bg-[#F1FAFF] py-5">
      <div className="mx-10 flex justify-between">
        <img src="/logo-blue.svg" className="h-10" alt="logo" />

        <div className="flex pl-44">
          <img src="/search.svg" className="h-8 mt-1 mx-3" alt="search" />
          <SearchBar />
        </div>
        <ButtonLogout />
      </div>
    </nav>
  );
}
