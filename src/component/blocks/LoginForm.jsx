import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

    // ini hapus gtw ganti yg mana
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.token) {
          localStorage.setItem("token", data.token);
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
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: data.message,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "An error occurred, please try again.",
        });
        console.error("Login error:", error);
      });
  }

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white rounded-xl border border-blue-900 space-y-4 w-96 h-96"
    >
      <p className="text-center text-3xl font-bold mt-5">Login</p>

      <div className="flex flex-col px-10 pt-3">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required
          id="email"
          onInput={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>

      <div className="flex flex-col px-10 pt-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required
          id="password"
          onInput={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <div className="mt-2">
          <label className="text-sm font-medium">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
            />{" "}
            Show Password
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-[#2D446E] hover:bg-blue-950 font-medium rounded-lg sm:w-auto px-32 py-2.5 text-center m-12"
      >
        Login
      </button>
    </form>
  );
}
