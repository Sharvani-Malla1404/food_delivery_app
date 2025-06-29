import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../utils/localStorageUtils";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const valid = validateUser(form);
    if (valid) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials. Please register first.");
      navigate("/register");
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>

      <div className="login-card">
        <button onClick={() => navigate("/")} className="back-button">
          ← Back
        </button>

        <h1 className="login-title">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
