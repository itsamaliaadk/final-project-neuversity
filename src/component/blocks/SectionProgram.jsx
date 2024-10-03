import React from "react";
import Table from "../ui/Table";

export default function SectionProgram() {
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
    <div>
      <Table data={tableData} />
    </div>
  );
}

// hapus file
