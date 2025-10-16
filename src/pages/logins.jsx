import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple example: login if username & password are not empty
    if (username && password) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Please enter username and password");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  login_box">
      <h1 className="text-3xl font-bold mb-4">Dashly Login</h1>
      <form
        onSubmit={handleLogin}
        className="gap-4 bg-white p-6 rounded shadow login_content"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
