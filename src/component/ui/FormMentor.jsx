import React, { useState } from "react";

export default function FormMentor() {
  const [formData, setFormData] = useState({
    fullname: "",
    university: "",
    certificate: "",
    courses: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // send form data to the server here
  };

  return (
    <section className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border border-blue-950">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="fullname" className="block mb-2 text-lg font-medium">
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="outline outline-gray-300 rounded-md p-2 w-full block"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="university"
            className="block mb-2 text-lg font-medium"
          >
            University
          </label>
          <input
            type="text"
            id="university"
            name="university"
            className="outline outline-gray-300 rounded-md p-2 w-full block"
            value={formData.university}
            onChange={handleChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="certificate"
            className="block mb-2 text-lg font-medium"
          >
            Language Certificate
          </label>
          <select
            name="certificate"
            id="certificate"
            className="outline outline-gray-300 rounded-md p-2 w-full block"
            value={formData.certificate}
            onChange={handleChange}
          >
            <option value="">Choose the language certificate</option>
            <option value="TOPIK1">TOPIK I</option>
            <option value="TOPIK2">TOPIK II</option>
            <option value="TOEFL">TOEFL</option>
            <option value="IELTS">IELTS</option>
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="courses" className="block mb-2 text-lg font-medium">
            Courses
          </label>
          <select
            name="courses"
            id="courses"
            className="outline outline-gray-300 rounded-md p-2 w-full block"
            value={formData.courses}
            onChange={handleChange}
          >
            <option value="">Choose the program</option>
            <option value="HC">Hangeul Class</option>
            <option value="1A">Korean Class 1A</option>
            <option value="1B">Korean Class 1B</option>
            <option value="2A">Korean Class 2A</option>
            <option value="topik1">TOPIK I Preparation Class</option>
            <option value="topik2">TOPIK II Preparation Class</option>
            <option value="Eng">English Class</option>
          </select>
        </div>

        <div className="mt-10 pb-3 flex flex-col md:flex-row justify-center gap-4">
          <button
            type="reset"
            className="outline outline-[#222F49] text-[#222F49] p-2 px-6 rounded-lg"
            onClick={() =>
              setFormData({
                fullname: "",
                university: "",
                certificate: "",
                courses: "",
              })
            }
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-[#222F49] text-white p-2 px-6 rounded-lg hover:bg-blue-900"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
