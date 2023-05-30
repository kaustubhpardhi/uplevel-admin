import Navbar from "../navbar/navbar";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./badge.css";

const Badge = () => {
  const [badges, setBadges] = useState([]);
  const [numOptions, setNumOptions] = useState(0);

  const { state } = useLocation();
  const rowDetails = state && state.rowDetails;
  const userId = rowDetails && rowDetails.id;

  const handleAddOption = () => {
    // Get the selected badge option from the dropdown
    const selectedBadge = document.getElementById("badge-dropdown").value;
    // Add the selected badge to the badges array
    setBadges((prevBadges) => [...prevBadges, selectedBadge]);
    setNumOptions(numOptions + 1);
  };
  const handleAssignBadges = async () => {
    const submissionId = rowDetails && rowDetails.submissionId;

    if (!userId || !submissionId || badges.length === 0) {
      console.error("Invalid data for assigning badges");
      return;
    }

    try {
      const response = await axios.post("/api/badge/assign", {
        userId,
        badgeList: badges,
        submissionId,
      });
      console.log(response.data);
      // Redirect or display success message
    } catch (error) {
      console.error(error);
      // Display error message
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="badge-container">
        <div className="badge-heading">
          <span className="badge-title">
            Assign badges and Approve Skills based on the performance 📍
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
            <option value="Frontend Ninja">Frontend Ninja</option>
            <option value="Backend Ninja">Backend Ninja</option>
            <option value="Rockstar Dev">Rockstar Dev</option>
            <option value="Clean Coder ">Clean Coder</option>
            <option value="angular">Angular</option>
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
            <option value="mysql">Mysql</option>
            <option value="spring">Spring</option>
            <option value="mongodb">Mongodb</option>
            <option value="git">Git</option>
          </select>
          <button className="add-badge" onClick={handleAddOption}>
            Add Badge
          </button>
          <span>{numOptions} badges added</span>
        </div>
        <div className="submit-badge">
          <button className="submit-badge-btn" onClick={handleAssignBadges}>
            Assign Badges
          </button>
        </div>
      </div>
    </div>
  );
};

export default Badge;
