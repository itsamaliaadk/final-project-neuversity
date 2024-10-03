import React from "react";
// import SectionProgram from "../component/blocks/SectionProgram";
import Table from "../component/ui/Table";
import SectionPrice from "../component/blocks/SectionPrice";

export default function Program() {
  const hangulClassData = [
    { meeting: 1, material: "Learn basic vowel and pronunciation" },
    { meeting: 2, material: "Learn vowel extension and pronunciation" },
    { meeting: 3, material: "Learn basic consonants and their pronunciation" },
    { meeting: 4, material: "Learn double consonants and their pronunciation" },
    { meeting: 5, material: "Learn final consonants and the pronunciation" },
    { meeting: 6, material: "Learn batchim 1 and the pronunciation" },
    { meeting: 7, material: "Learn to combine syllables" },
    { meeting: 8, material: "Hangul practice questions" },
  ];

  const korean1AData = [
    { meeting: 1, material: "Learn about greetings in Korean" },
    { meeting: 2, material: "Learn about country vocabulary" },
    { meeting: 3, material: "Learn about profession vocabulary" },
    { meeting: 4, material: "Learn basic vocabulary places" },
    {
      meeting: 5,
      material:
        "Learn vocabulary about school facilities and objects in the classroom",
    },
    { meeting: 6, material: "Learn grammar 1A" },
    { meeting: 7, material: "Memorize some vocabulary 1A" },
    { meeting: 8, material: "Practice questions 1A" },
  ];

  const korean1BData = [
    { meeting: 1, material: "Learn verbs 1B" },
    { meeting: 2, material: "Learn adjectives and interrogative pronouns 1B" },
    { meeting: 3, material: "Learn daily life vocabulary" },
    {
      meeting: 4,
      material:
        "Learn names of days, months, chinese numbers, native korean numbers",
    },
    { meeting: 5, material: "Learn vocabulary related to dates" },
    { meeting: 6, material: "Learn grammar 1B" },
    { meeting: 7, material: "Memorize some vocabulary 1B" },
    { meeting: 8, material: "Practice questions 1B" },
  ];

  const korean2AData = [
    { meeting: 1, material: "Learn basic vocabulary about time" },
    { meeting: 2, material: "Learn basic vocabulary about daily activities" },
    { meeting: 3, material: "Learn how to use the past tense" },
    { meeting: 4, material: "Learn basic vocabulary about weekend activities" },
    { meeting: 5, material: "Learn batchim 2 and the pronunciation" },
    { meeting: 6, material: "Learn grammar 2A" },
    { meeting: 7, material: "Memorize some vocabulary 2A" },
    { meeting: 8, material: "Practice questions 2A" },
  ];

  const korean2BData = [
    { meeting: 1, material: "Learn about classifier words 1" },
    { meeting: 2, material: "Learn vocabulary to buy something" },
    { meeting: 3, material: "Learn expressions for buying something" },
    { meeting: 4, material: "Learn Korean food vocabulary & taste" },
    { meeting: 5, material: "Learn vocabulary related to restaurants" },
    { meeting: 6, material: "Learn grammar 2B" },
    { meeting: 7, material: "Memorize some vocabulary 2B" },
    { meeting: 8, material: "Practice questions 2B" },
  ];

  const topikIData = [
    { meeting: 1, material: "Pre-test TOPIK I" },
    { meeting: 2, material: "Discussing listening questions number 1-15" },
    { meeting: 3, material: "Discussing listening questions number 16-30" },
    { meeting: 4, material: "Discussing reading questions number 31-40" },
    { meeting: 5, material: "Discussing reading questions number 41-50" },
    { meeting: 6, material: "Discussing reading questions number 51-60" },
    { meeting: 7, material: "Discussing reading questions number 61-70" },
    { meeting: 8, material: "Final test TOPIK I" },
  ];

  const topikIIData = [
    { meeting: 1, material: "Pre-test TOPIK II" },
    { meeting: 2, material: "Discussing listening questions number 1-25" },
    { meeting: 3, material: "Discussing listening questions number 26-50" },
    { meeting: 4, material: "Discussing writing questions number 51-52" },
    { meeting: 5, material: "Discussing writing questions number 53-54" },
    { meeting: 6, material: "Discussing reading questions number 1-25" },
    { meeting: 7, material: "Discussing reading questions number 26-50" },
    { meeting: 8, material: "Final test TOPIK II" },
  ];

  const englishClassData = [
    { meeting: 1, material: "Learn parts of speech" },
    { meeting: 2, material: "Learn about tenses" },
    { meeting: 3, material: "Writing practice" },
    { meeting: 4, material: "Pronunciation practice" },
    { meeting: 5, material: "Speaking practice" },
    { meeting: 6, material: "Memorize vocabulary" },
    { meeting: 7, material: "Learn about common idioms" },
    { meeting: 8, material: "Practice talking about daily life" },
  ];

  return (
    <div className="bg-[#F1FAFF]">
      <p className="font-bold text-4xl text-center my-5">
        Lingua Flagship
        <br /> Program
      </p>
      <Table data={hangulClassData} />
      <Table data={korean1AData} />
      <Table data={korean1BData} />
      <Table data={korean2AData} />
      <Table data={korean2BData} />
      <Table data={topikIData} />
      <Table data={topikIIData} />
      <Table data={englishClassData} />

      <SectionPrice />
    </div>
  );
}

// buat ui tabel terus dipaggin disini tp versi kanan kiri

// halamannya
