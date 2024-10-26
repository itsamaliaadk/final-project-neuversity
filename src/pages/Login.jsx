import React from "react";
import LoginForm from "../component/blocks/LoginForm";

export default function Login() {
  return (
    <>
      <div className="bg-[#F1FAFF] flex flex-col items-center justify-center min-h-screen ">
        <img src="/logo-blue.svg" className="mx-auto pt-20 pb-10" alt="logo" />
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border border-blue-950">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
