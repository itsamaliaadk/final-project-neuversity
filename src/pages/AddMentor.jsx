import React from "react";
import FormMentor from "../component/ui/FormMentor";

export default function AddMentor() {
  return (
    <section className="bg-[#F1FAFF] min-h-screen">
      <div className="flex justify-start pt-3 pb-10 ml-3">
        <img src="/logo-blue.svg" alt="logo" className="h-10" />
      </div>

      <div className="container">
        <p className="font-bold text-4xl text-center">Add New Mentor</p>
        <p className="text-center">
          Please fill in the details below to add a new mentor.
        </p>
      </div>

      <div className="flex items-center justify-center min-h-screen ">
        <FormMentor />
      </div>
    </section>
  );
}
