import React from "react";

export default function Form() {
  return (
    <div className="container grid grid-cols-2 h-screen py-16">
      <div>
        {/* sosmed + desc */}
        <p className="font-bold text-4xl">Let's Talk</p>
        <p className="my-5">
          If you have any questions or need more information, please feel free
          to contact us. Let’s Talk! Fill out the form beside, and our team will
          be happy to assist you.
        </p>
        <p className="font-bold">Email</p>
        {/* link email / bukan? */}
        <p className="my-2">lingua@gmail.com</p>
        <p className="font-bold mt-5">Socials</p>

        <div className="grid">
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.whatsapp.com/">Whatsapp</a>
        </div>
      </div>

      {/* form */}
    </div>
  );
}
