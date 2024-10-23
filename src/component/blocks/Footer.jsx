import React from "react";
import { Link } from "react-router-dom";
import About from "../../pages/About";
import Program from "../../pages/Program";
import Contact from "../../pages/Contact";

export default function Footer() {
  return (
    <section className="bg-[#222F49] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/logo-lingua.svg" alt="logo" className="h-8" />
            </Link>
          </div>

          <div className="flex gap-6">
            <Link to="/about">About Us</Link>
            <Link to="/program">Program</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex gap-6">
            <img src="/ig.svg" alt="ig" />
            <img src="/wa.svg" alt="wa" />
          </div>
        </div>

        <hr className="border-t border-gray-500 my-4" />

        <div className="text-center">
          <p>Copyright © 2024 Lingua. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
