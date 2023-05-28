import "./navbar.css";
import { MdOutlineLogout } from "react-icons/md";
import { FaChartLine, FaPlus, FaListAlt, FaNewspaper } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  Navigate,
  useHistory,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard") {
      setActiveItem(0);
    } else if (path === "/test") {
      setActiveItem(1);
    } else if (path === "/assignment") {
      setActiveItem(2);
    } else if (path === "/submissions") {
      setActiveItem(3);
    }
  }, [location]);

  const handleItemClick = (index, url) => {
    setActiveItem(index);
    navigate(url);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p className="nav-logo-title">Uplevel</p>
      </div>
      <div className="nav-items">
        <div
          className={`nav-item ${activeItem === 0 ? "active" : ""}`}
          onClick={() => handleItemClick(0, "/dashboard")}
        >
          <FaChartLine />
          <p className="nav-item-title">Dashboard</p>
        </div>
        <div
          className={`nav-item ${activeItem === 1 ? "active" : ""}`}
          onClick={() => handleItemClick(1, "/test")}
        >
          <FaPlus />
          <p className="nav-item-title">Add Questions</p>
        </div>
        <div
          className={`nav-item ${activeItem === 2 ? "active" : ""}`}
          onClick={() => handleItemClick(2, "/assignment")}
        >
          <FaListAlt />
          <p className="nav-item-title">Upload Assignment</p>
        </div>
        <div
          className={`nav-item ${activeItem === 3 ? "active" : ""}`}
          onClick={() => handleItemClick(3, "/submission")}
        >
          <FaNewspaper />
          <p className="nav-item-title">Submissions</p>
        </div>
      </div>
      <div className="navbar-logout">
        <button className="logout-btn">
          Logout <MdOutlineLogout />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
