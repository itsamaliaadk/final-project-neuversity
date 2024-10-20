import React from "react";

export default function NavDash() {
  return (
    <nav>
      <div className="mx-10 pt-5 flex justify-between">
        <img src="/logo-blue.svg" className="h-10" alt="logo" />

        {/* icon search + searching bar */}
        <div>
          <img src="/search.svg" className="h-8" alt="search" />
        </div>

        <div className="">
          <img src="/notif.svg" className="h-10" alt="notification" />
        </div>
      </div>
    </nav>
  );
}
