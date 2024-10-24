import { div, li } from "framer-motion/client";
import React from "react";
import data from "../data/program";

export default function ProgramExample() {
  return (
    <div>
      {data.map(function (item, index) {
        return (
          <div key={index} className="grid grid-cols-2 ">
            <div className={index % 2 == 0 ? "order-2" : ""}>
              <CardClass title={item.title} benefits={item.benefits} />
            </div>
            <div className={index % 2 == 0 ? "order-1" : ""}>
              <TableMaterial meetings={item.meetings} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CardClass({ title, benefits }) {
  return (
    <div className="border border-black mb-3">
      <h1 className="text-red-200">{title}</h1>

      <ul>
        {benefits
          ? benefits.map(function (benefit, index) {
              return <li key={index}>{benefit}</li>;
            })
          : "kosong"}
      </ul>
    </div>
  );
}

function TableMaterial({ meetings }) {
  return (
    <table>
      <tr>
        <th className="border border-black">pertemuan ke</th>
        <th className="border border-black">materi</th>
      </tr>

      {meetings
        ? meetings.map(function (meeting, index) {
            return (
              <tr key={index}>
                <td className="border border-black">{meeting.pertemuan}</td>
                <td className="border border-black">{meeting.materials}</td>
              </tr>
            );
          })
        : "kosong"}
    </table>
  );
}
