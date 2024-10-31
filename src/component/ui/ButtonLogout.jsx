import React from "react";
import { useNavigate } from "react-router-dom"; // Mengimpor hook useNavigate dari react-router-dom untuk navigasi halaman

// Membuat komponen ButtonLogout
const ButtonLogout = () => {
  const navigate = useNavigate(); // Mendeklarasikan navigasi halaman menggunakan useNavigate

  const handleLogout = () => {
    // Logika logout, misalnya menghapus token atau sesi pengguna
    localStorage.removeItem("token"); // Menghapus token dari localStorage untuk mengakhiri sesi pengguna

    navigate("/"); // Mengarahkan pengguna ke halaman beranda setelah logout
  };

  return (
    <button
      onClick={handleLogout} // Menetapkan fungsi handleLogout sebagai event handler untuk tombol saat diklik
      className="px-4 py-2 bg-[#222F49] text-white w-24 rounded-full hover:bg-blue-900 transition-colors items-end" // Menetapkan styling tombol dengan Tailwind CSS
    >
      Logout
    </button>
  );
};

export default ButtonLogout; // Mengekspor komponen ButtonLogout agar dapat digunakan di komponen lain
