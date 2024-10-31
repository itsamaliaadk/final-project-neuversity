import { Link } from "react-router-dom"; // Mengimpor komponen Link dari react-router-dom untuk navigasi antar halaman
import React, { useState } from "react"; // Mengimpor React dan useState untuk mengelola state komponen
import Home from "../../pages/Home"; 
import About from "../../pages/About"; 
import Contact from "../../pages/Contact"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengelola status menu toggle (terbuka atau tertutup)

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Fungsi untuk mengganti nilai isOpen saat tombol menu ditekan
  };

  return (
    <nav className="bg-[#222F49]"> {/* Membuat navigasi dengan background berwarna */}
      <div className="container flex justify-between items-center text-white py-4">
        <Link to="/"> {/* Link untuk kembali ke halaman Home */}
          <img src="/logo-lingua.svg" alt="logo" className="h-8" /> {/* Logo website */}
        </Link>

        <div className="md:hidden"> {/* Bagian ini akan ditampilkan hanya pada tampilan mobile */}
          <button onClick={toggleMenu}> {/* Tombol untuk toggle menu */}
            {isOpen ? ( // Mengecek apakah menu terbuka
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" // Icon 'X' untuk menutup menu saat menu terbuka
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" // Icon menu (tiga garis) saat menu tertutup
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6"> {/* Menu navigasi untuk desktop */}
          <Link to="/">Home</Link> 
          <Link to="/about">About Us</Link> 
          <Link to="/program">Program</Link> 
          <Link to="/contact">Contact</Link> 
        </div>
      </div>

      {isOpen && ( // Menampilkan menu dropdown jika isOpen bernilai true
        <div className="md:hidden bg-[#222F49] flex flex-col items-start gap-4 p-4 text-white">
          <Link to="/" onClick={toggleMenu}>
            Home {/* Link ke halaman Home pada tampilan mobile */}
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us {/* Link ke halaman About Us pada tampilan mobile */}
          </Link>
          <Link to="/program" onClick={toggleMenu}>
            Program {/* Link ke halaman Program pada tampilan mobile */}
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact {/* Link ke halaman Contact pada tampilan mobile */}
          </Link>
        </div>
      )}
    </nav>
  );
}
