import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useEffect("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Email and Password Required",
        text: "Email and Password cannot be empty",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "applicantion/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console(data);
        localStorage.setItem("token", data.token);
        if (data.token) {
          Swal.fire({
            icon: "success",
            title: "Login Success",
            text: "You will be redirected to dashboard",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/dashboard");
          });
        } else {
          Swal.alert({
            icon: "error",
            title: "Login Failed",
            text: data.message,
          });
        }
      });
  }

  return (
    // <form className="max-w-sm mx-auto bg-white rounded-xl">
    //   <div className="px-10 pt-10">
    //     <label
    //       htmlFor="email"
    //       className="block mb-2 text-sm font-medium"
    //     >
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
    //       required=""
    //     />
    //   </div>
    //   <div className="px-10 pt-5 mb-10">
    //     <label
    //       htmlFor="password"
    //       className="block mb-2 text-sm font-medium"
    //     >
    //       Password
    //     </label>
    //     <input
    //       type="password"
    //       id="password"
    //       className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
    //       required=""
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="text-white bg-blue-950 hover:outline-8 font-medium rounded-lg text-sm w-fukk sm:w-auto px-32 py-2.5 text-center mx-10 mb-10"
    //   >
    //     Login
    //   </button>
    // </form>

    // ---

    <form
      onSubmit={handleLogin}
      className="bg-white rounded-xl border border-blue-900 space-y-4"
    >
      <p className="text-center text-2xl font-bold">Login</p>
      <div className="flex flex-col">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required=""
          id="email"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          className="block mb-2 text-sm font-medium"
          id="password"
          onInput={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-[#2D446E] hover:bg-blue-950 hover:outline-8 font-medium rounded-lg text-sm w-fukk sm:w-auto px-32 py-2.5 text-center mx-10 mb-10"
      >
        Login
      </button>
    </form>
  );
}

// sweetalert2 blm bisa
// trs ini mikir make email sm pass kita bkn dr dummy gmn, bsk tanya + dihapus