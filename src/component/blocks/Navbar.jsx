import { Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Program from "../../pages/Program";
import Contact from "../../pages/Contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#222F49]">
      <div className="container flex justify-between items-center text-white py-4">
        <Link to="/">
          <img src="/logo-lingua.svg" alt="logo" className="h-8" />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
            
            
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/program">Program</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#222F49] flex flex-col items-start gap-4 p-4 text-white">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/program" onClick={toggleMenu}>Program</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
