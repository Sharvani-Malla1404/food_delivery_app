// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Load existing users from localStorage or create empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // ✅ Optional: Prevent duplicate usernames
    const alreadyExists = users.some(
      (u) => u.username === userDetails.username
    );
    if (alreadyExists) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    // ✅ Add new user and store in localStorage
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Registered User:", userDetails);
    navigate("/login"); // 👈 redirect after successful registration
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
          required
        />
        <input
          placeholder="Email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          required
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
