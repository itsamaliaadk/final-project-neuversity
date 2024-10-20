import React from "react";
import SearchBar from "../ui/Search";

export default function NavDash() {
  return (
    <nav>
      <div className="mx-10 pt-5 flex justify-between">
        <img src="/logo-blue.svg" className="h-10" alt="logo" />

        <div className="flex pl-44">
          <img src="/search.svg" className="h-8 mt-1 mx-3" alt="search" />
          <SearchBar />
        </div>

        <div>
          <img src="/notif.svg" className="h-10" alt="notification" />
        </div>
      </div>
    </nav>
  );
}
