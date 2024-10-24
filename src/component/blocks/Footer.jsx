import React from "react";
import { Link } from "react-router-dom";
import About from "../../pages/About";
import Program from "../../pages/Program";
import Contact from "../../pages/Contact";

export default function Footer() {
  return (
    <section className="bg-[#222F49] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img src="/logo-lingua.svg" alt="logo" className="h-8" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:mb-0">
            <Link to="/about">About Us</Link>
            <Link to="/program">Program</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/" className="underline">
              <img src="/ig.svg" alt="ig" />
            </a>
            <a href="https://www.whatsapp.com/" className="underline">
              <img src="/wa.svg" alt="wa" />
            </a>
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
