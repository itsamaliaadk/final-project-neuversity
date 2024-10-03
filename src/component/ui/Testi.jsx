import React from "react";

export default function Testi({ foto, nama, icons, deskripsi }) {
  return (
    <div className="w-80 px-5 mb-28">
      <div className="border border-blue-950 bg-white text-star h-full p-6 rounded-xl">
        <img src={foto} className="rounded-full h-28 w-28" alt="foto" />
        <p className="mt-5">{nama ? nama : "kosong"}</p>
        <img src={icons} alt="bintang" />
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

// blm muncul nama
