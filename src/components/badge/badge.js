import Navbar from "../navbar/navbar";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./badge.css";

const Badge = () => {
  const [badges, setBadges] = useState([]);
  const [numOptions, setNumOptions] = useState(0);

  console.log(badges);
  const { state } = useLocation();
  const rowDetails = state && state.rowDetails;
  console.log(rowDetails);

  const handleAddOption = () => {
    // Get the selected badge option from the dropdown
    const selectedBadge = document.getElementById("badge-dropdown").value;
    // Add the selected badge to the badges array
    setBadges((prevBadges) => [...prevBadges, selectedBadge]);
    setNumOptions(numOptions + 1);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="badge-container">
        <div className="badge-heading">
          <span className="badge-title">
            Assign badges based on the performance 📍
          </span>
        </div>
        <div className="badge-para">
          <span className="badge-para-title">
            Select badges from the dropdown
          </span>
        </div>
        <div className="badge-dropdown">
          <span className="label">Select Badges</span>
          <select id="badge-dropdown" className="badges-drp">
            <option value="choose">Choose</option>
            <option value="fininja">Frontend Ninja</option>
            <option value="bninja">Backend Ninja</option>
            <option value="rdev">Rockstar Dev</option>
            <option value="cc">Clean Coder</option>
          </select>
          <button className="add-badge" onClick={handleAddOption}>
            Add Badge
          </button>
          <span>{numOptions} badges added</span>
        </div>
        <div className="submit-badge">
          <button className="submit-badge-btn">Assign Badges</button>
        </div>
      </div>
    </div>
  );
};

export default Badge;
