import React from "react";
import Form from "../ui/Form";

export default function SectionContact() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 h-auto py-16 px-5 md:px-16">
      <div>
        <p className="font-bold text-4xl">Let's Talk</p>
        <p className="my-5">
          If you have any questions or need more information, please feel free
          to contact us. Let’s Talk! Fill out the form beside, and our team will
          be happy to assist you.
        </p>
        <p className="font-bold">Email</p>

        <p className="my-2 underline">lingua@gmail.com</p>
        <p className="font-bold mt-5">Socials</p>

        <div className="grid">
          <a
            href="https://www.instagram.com/"
            className="underline"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.whatsapp.com/"
            className="underline"
            target="_blank"
          >
            Whatsapp
          </a>
        </div>
      </div>

      <Form />
    </div>
  );
}
