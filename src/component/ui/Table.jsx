import React from "react";

export default function Table({ data }) {
  return (
    <div className="container">
      <table className="">
        <thead>
          <tr className="bg-[#1E2538] text-center text-white">
            <th className="p-2">THE TH MEETING</th>
            <th>MATERIALS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center  bg-[#7D8DA6]">
              <td>{item.meeting}</td>
              <td className="px-5">{item.material}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// desain tablenya
// uk tablenya blm disamain
