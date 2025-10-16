import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter Username and Password");
    }
  };
  return (
    <div className="container mt-28 grid place-content-center h-fit mx-auto border-2 border-purple-300 bg-pink-200 p-6 rounded-2xl max-w-md">
      {" "}
      <div className="border bg-purple-600 rounded-2xl max-w-xl">
        <h1 className="text-center text-black-500 text-2xl font-bold mb-6">
          Login
        </h1>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div
          className="flex items-center gap-2 border-b 
        border-gray-400 pb-2"
        >
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your email or username"
            className="flex-1 outline-none bg-transparent "
          />
          <FaUser size={20} className="text-gray-700" />
        </div>

        <div className="flex items-center gap-2 border-b border-gray-400 pb-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            className="flex-1 outline-none bg-transparent"
          />
          <FaLock size={20} className="text-gray-700" />
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <label>
            <input type="checkbox" className="mr-1" />
            Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Forget password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
