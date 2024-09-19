import { Link } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Program from "../../pages/Program";
import Contact from "../../pages/Contact";

export default function Navbar() {
  return (
    <nav className="bg-[#222F49]">
      <div className="container flex justify-between text-white py-4">
        <Link>
          {/* logo navbar */}
          <img src="/logo-lingua.svg" alt="logo" className="h-8" />
        </Link>

        {/* menu navbar */}
        <div className="flex items-center gap-6">
          <Link to={"/"}>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/program">Program</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
