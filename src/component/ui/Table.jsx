import React from "react";

export default function Table({ data }) {
  return (
    <div className="container">
      <table className="w-1/2 table-auto border-collapse text-left shadow-md rounded-lg my-5">
        <thead>
          <tr className="bg-[#1E2538] text-center text-white">
            <th className="px-6 py-3 w-1/5">THE TH MEETING</th>
            <th className="px-6 py-3">MATERIALS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#F1FAFF" : "bg-[#7D8DA6]"}
            >
              <td className="text-center p-2">{item.meeting}</td>
              <td className="text-center p-2">{item.material}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// desain tablenya
// uk tablenya blm disamain
