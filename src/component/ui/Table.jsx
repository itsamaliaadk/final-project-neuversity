import React from "react";

export default function Table({ data }) {
  return (
    <div className="container">
      <table className="table-striped">
        <thead>
          <tr className="bg-[#1E2538] text-center text-white">
            <th className="p-2">THE TH MEETING</th>
            <th className="p-2">MATERIALS</th>
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
