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

      <Navbar />

      <Routes>
        {/* Main Layout */}

        {/* Admin Layout */}

        {/* root every pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addmentor" element={<AddMentor />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

// gapaham perubahan yg importnya kok bisa kayak gt
// import MainLayout from "./components/MainLayout";
// import AdminLayout from "./components/AdminLayout";

// membuat halaman yg NO 4 CARA, BLM KRN BINGUNG YG MANA
// LOGIN ERROR GTW