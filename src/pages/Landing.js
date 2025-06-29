import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <img
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141356.jpg"
          alt="Delicious Food"
          className="landing-hero-image"
        />

        <h1 className="landing-title">Welcome to TMF</h1>
        <p className="landing-subtitle"># TASTY MEALS FEAST #</p>

        <div className="landing-buttons">
          <button className="btn register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
          <button className="btn login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
