import { useState } from "react"; // Importing useState for managing state within the component
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation after successful login
import Swal from "sweetalert2"; // Importing SweetAlert2 for displaying alerts

// Define the LoginForm component as the default export
export default function LoginForm() {
  // Define state variables for email, password, and showPassword
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  // Mock user credentials for login simulation
  const mockUser = {
    email: "amalia@gmail.com",
    password: "marklee",
  };

  // Function to handle form submission
  function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if email or password fields are empty
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Email and Password Required",
        text: "Email and Password cannot be empty",
        confirmButtonColor: "#222F49",
      });
      return; // Exit function if fields are empty
    }

    // Simulate login validation by comparing input with mock user data
    if (email === mockUser.email && password === mockUser.password) {
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "You will be redirected to dashboard",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.setItem("token", "fake-123-lee"); // Simulated token setting
        navigate("/admin"); // Simulate navigation to dashboard page
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
      {" "}
      {/* Form element with onSubmit handler */}
      <p className="text-center text-3xl font-bold mt-5">Login</p>{" "}
      {/* Title of the form */}
      {/* Email input field */}
      <div className="flex flex-col pt-3">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required // Required attribute to ensure input validation
          id="email"
          onInput={(e) => {
            setEmail(e.target.value); // Update email state on input
          }}
          value={email} // Controlled component with email state as value
        />
      </div>
      {/* Password input field */}
      <div className="flex flex-col pt-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
          className="bg-white border border-gray-400 text-sm rounded-lg block w-full p-2.5"
          required // Required attribute to ensure input validation
          id="password"
          onInput={(e) => {
            setPassword(e.target.value); // Update password state on input
          }}
          value={password} // Controlled component with password state as value
        />
        <div className="mt-2">
          <label className="text-sm font-medium">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state on checkbox change
              checked={showPassword} // Bind checked attribute to showPassword state
            />{" "}
            Show Password
          </label>
        </div>
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="text-white my-4 bg-[#2D446E] hover:bg-blue-950 font-medium rounded-lg w-full py-2.5 text-center"
      >
        Login
      </button>
    </form>
  );
}
