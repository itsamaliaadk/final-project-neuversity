import React from "react";

import LoginForm from "../component/blocks/LoginForm";

export default function Login() {
  return (
    <>
      <div className="bg-[#F1FAFF]">
        <img src="/logo-blue.svg" className="my-5 " alt="logo" />
        <LoginForm />
      </div>
    </>
  );
}
