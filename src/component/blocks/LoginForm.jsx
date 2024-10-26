import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // simulated user credentials
  const mockUser = {
    email: "amalia@gmail.com",
    password: "marklee",
  };

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Email and Password Required",
        text: "Email and Password cannot be empty",
        confirmButtonColor: "#222F49",
      });
      return;
    }

    // simulate login validation
    if (email === mockUser.email && password === mockUser.password) {
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "You will redirected to dashboard",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.setItem("token", "fake-123-lee"); // simulated setting token
        navigate("/admin"); // simulate navigation to dashboard
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again",
        confirmButtonColor: "#222F49",
      });
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <p className="text-center text-3xl font-bold mt-5">Login</p>

      <div className="flex flex-col  pt-3">
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

      <div className="flex flex-col  pt-5">
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
        className="text-white my-4 bg-[#2D446E] hover:bg-blue-950 font-medium rounded-lg  w-full py-2.5 text-center "
      >
        Login
      </button>
    </form>
  );
}
