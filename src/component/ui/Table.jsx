import React from "react";

const MeetingTable = () => {
  const tableData = [
    { meeting: 1, material: "Learn basic vowel and pronunciation" },
    { meeting: 2, material: "Learn vowel extension and pronunciation" },
    { meeting: 3, material: "Learn basic consonants and their pronunciation" },
    { meeting: 4, material: "Learn double consonants and their pronunciation" },
    { meeting: 5, material: "Learn final consonants and the pronunciation" },
    { meeting: 6, material: "Learn batchim 1 and the pronunciation" },
    { meeting: 7, material: "Learn to combine syllables" },
    { meeting: 8, material: "Hangul practice questions" },
  ];

  return (
    <table style={tableStyle}>
      <thead>
        <tr style={headerStyle}>
          <th style={headerCellStyle}>THE TH MEETING</th>
          <th style={headerCellStyle}>MATERIALS</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
            <td style={cellStyle}>{row.meeting}</td>
            <td style={cellStyle}>{row.material}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
};

const headerStyle = {
  backgroundColor: "#222C39", // dark color for header
  color: "#fff",
};

const headerCellStyle = {
  padding: "10px",
  textAlign: "center",
  fontWeight: "bold",
  border: "1px solid #ddd",
};

const rowEvenStyle = {
  backgroundColor: "#E9EEF3", // light background for even rows
};

const rowOddStyle = {
  backgroundColor: "#4A5B6A", // dark background for odd rows
  color: "#fff", // white text for dark background rows
};

const cellStyle = {
  padding: "10px",
  textAlign: "center",
  border: "1px solid #ddd",
};

export default MeetingTable;

// gpt tp gakeluar semua yg ada di program page
