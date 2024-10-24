import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddMentor from "./pages/AddMentor";
import MainLayout from "./component/MainLayout";
import AdminLayout from "./component/AdminLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/program"
          element={
            <MainLayout>
              <Program />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* Admin Layout */}

        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AdminLayout>
              <Login />
            </AdminLayout>
          }
        />
        <Route
          path="/addmentor"
          element={
            <AdminLayout>
              <AddMentor />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
