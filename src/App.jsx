import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Navbar from "./component/blocks/Navbar";
import Footer from "./component/blocks/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddMentor from "./pages/AddMentor";

export default function App() {
  return (
    <BrowserRouter>
      {/* root navbar */}
      <Navbar />

      <Routes>
        {/* root every pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addmentor" element={<AddMentor />} />
      </Routes>

      {/* root footer */}
      <Footer />
    </BrowserRouter>
  );
}
