import React from "react";

export default function Testi({ foto, nama, icons, deskripsi }) {
  return (
    <div className="w-80 px-5 mb-28">
      <div className="border border-blue-950 bg-white text-center h-full p-6 rounded-xl ">
        <img src={foto} className="rounded-full" alt="foto" />
        <p>{nama ? nama : "kosong"}</p>
        {icons}
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

// blm muncul nama + icon star
