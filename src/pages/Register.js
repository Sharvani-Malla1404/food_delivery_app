// Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../utils/localStorageUtils";
import "./Register.css"; // Added CSS import

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = () => {
    const success = saveUser(form);
    if (success) {
      alert("Registered successfully!");
      navigate("/login");
    } else {
      alert("User already exists. Please choose another.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-overlay"></div>

      <div className="register-card">
        <button onClick={() => navigate("/")} className="back-button">
          ← Back
        </button>

        <h1 className="register-title">Register</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="register-input"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="register-input"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
