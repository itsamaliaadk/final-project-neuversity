import React from "react";
import FormMentor from "../component/ui/FormMentor";

export default function AddMentor() {
  return (
    <section className="bg-[#F1FAFF]">
      <div className="items-start">
        <img src="/logo-blue.svg" alt="logo" />
      </div>

      <div className="container">
        <p className="font-bold text-4xl text-center">Add New Mentor</p>
        <p className="text-center">Please fill in the details below to add a new mentor.</p>
      </div>

      <FormMentor />
    </section>
  );
}
