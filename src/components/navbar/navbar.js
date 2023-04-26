import "./navbar.css";
import { FaChartLine, FaPlus, FaListAlt, FaNewspaper } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p className="nav-logo-title">Uplevel</p>
      </div>
      <div className="nav-items">
        <div
          className={`nav-item ${activeItem === 0 ? "active" : ""}`}
          onClick={() => handleItemClick(0)}
        >
          <FaChartLine />
          <p className="nav-item-title">Dashboard</p>
        </div>
        <div
          className={`nav-item ${activeItem === 1 ? "active" : ""}`}
          onClick={() => handleItemClick(1)}
        >
          <FaPlus />
          <p className="nav-item-title">Add Questions</p>
        </div>
        <div
          className={`nav-item ${activeItem === 2 ? "active" : ""}`}
          onClick={() => handleItemClick(2)}
        >
          <FaListAlt />
          <p className="nav-item-title">Upload Assignment</p>
        </div>
        <div
          className={`nav-item ${activeItem === 3 ? "active" : ""}`}
          onClick={() => handleItemClick(3)}
        >
          <FaNewspaper />
          <p className="nav-item-title">Submissions</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
