import React, { useState } from "react"; // Import React and useState hook for state management

export default function Form() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    fullname: "", // Initial value for fullname field
    email: "", // Initial value for email field
    program: "", // Initial value for program field
    message: "", // Initial value for message field
  });

  // Function to handle input changes for form fields
  const handleChange = (e) => {
    const { id, value } = e.target; // Destructure id and value from the event target
    setFormData((prevData) => ({
      ...prevData, // Spread existing data
      [id]: value, // Update only the field that was changed
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const { fullname, email, program, message } = formData; // Destructure formData fields for easy access
    const whatsappNumber = "+6287794425656"; // WhatsApp contact number
    // Create WhatsApp URL with query parameters for form data
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello! My name is ${fullname}. I'm interested in the ${program} program. Here is my email: ${email}. Message: ${message}`
    )}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp chat in a new tab
  };

  // Render form component UI
  return (
    <section className="outline outline-blue-950 bg-white p-5 rounded-lg w-full md:w-96 mx-auto">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        {/* Fullname input field */}
        <div className="mb-5">
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-black"
          >
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            value={formData.fullname} // Bind fullname value from formData
            onChange={handleChange} // Update state on change
            className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
            required // Make the field required
          />
        </div>

        {/* Email input field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email} // Bind email value from formData
            onChange={handleChange} // Update state on change
            className="bg-gray-200 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"
            required // Make the field required
          />
        </div>

        {/* Program selection field */}
        <div className="mb-5">
          <label
            htmlFor="program"
            className="block mb-3 text-sm font-medium text-black"
          >
            What program are you interested in :
          </label>
          <select
            id="program"
            value={formData.program} // Bind program value from formData
            onChange={handleChange} // Update state on change
            className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option value="">Choose the program</option>{" "}
            {/* Default placeholder */}
            {/* Program options */}
            <option value="Hangeul Class">Hangeul Class</option>
            <option value="Korean Class 1A">Korean Class 1A</option>
            <option value="Korean Class 1B">Korean Class 1B</option>
            <option value="Korean Class 2A">Korean Class 2A</option>
            <option value="TOPIK I Preparation Class">
              TOPIK I Preparation Class
            </option>
            <option value="TOPIK II Preparation Class">
              TOPIK II Preparation Class
            </option>
            <option value="English Class">English Class</option>
          </select>
        </div>

        {/* Message input field */}
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message} // Bind message value from formData
            onChange={handleChange} // Update state on change
            className="block p-2.5 w-full text-sm text-black bg-gray-200 rounded-lg border border-gray-300"
            placeholder="Leave a message..." // Placeholder text
          />
        </div>

        {/* Submit button */}
        <button
          type="submit" // Button type set to submit
          className="text-white bg-[#2D446E] hover:bg-blue-950 font-medium rounded-lg text-sm w-full py-2.5 text-center mt-5"
        >
          Send
        </button>
      </form>
    </section>
  );
}
