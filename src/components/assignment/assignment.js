import "./assignment.css";
import { FiUpload } from "react-icons/fi";
import Navbar from "../navbar/navbar";
import { useState } from "react";

function Assignment() {
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDomain, setAssignmentDomain] = useState("");
  const [assignmentLevel, setAssignmentLevel] = useState("");
  const handleFile = (event) => {};

  return (
    <div className="container">
      <Navbar />
      <div className="assignment">
        <div className="assignment-header">
          <div className="assignment-header-title">
            <FiUpload />
            <p className="assignment-header-title">Upload Assignment</p>
          </div>
          <span className="test-header-body">
            Tasks to bring out true potential of a candidate
          </span>
        </div>
        <div className="upload">
          <p className="upload-title">Select or Drop the zip folder here</p>
          <input
            type="file"
            className="upload-ipt"
            onChange={(event) => handleFile(event)}
          ></input>
        </div>
        <div className="assignment-form">
          <div className="assignment-name">
            <span className="label">Assignment Name</span>
            <input type="text" className="name-ipt"></input>
          </div>
          <div className="assignment-domain">
            <span className="label">Assignment Domain</span>
            <select className="assignment-drp">
              <option value="apti">Aptitude</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div className="assignment-level">
            <span className="label">Assignment Level</span>
            <select className="assignment-drp">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="assignment-button">
            <button className="ass-btn">Upload </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
