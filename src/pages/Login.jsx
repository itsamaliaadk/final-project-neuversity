import React from "react";
import LoginForm from "../component/blocks/LoginForm";

export default function Login() {
  return (
    <>
      <div className="bg-[#F1FAFF] h-screen">
        <img src="/logo-blue.svg" className="mx-auto pt-20 pb-10" alt="logo" />
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
