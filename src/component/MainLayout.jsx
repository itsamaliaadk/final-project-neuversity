import { Link } from "react";
import Footer from "./blocks/Footer";
import Navbar from "./blocks/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
