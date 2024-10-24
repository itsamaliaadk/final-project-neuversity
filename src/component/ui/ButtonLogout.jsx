import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logika logout, misalnya menghapus token atau sesi pengguna
    localStorage.removeItem("token"); // Contoh menghapus token dari localStorage

    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-[#222F49] text-white rounded-full hover:bg-blue-900 transition-colors"
    >
      Logout
    </button>
  );
};

export default ButtonLogout;
