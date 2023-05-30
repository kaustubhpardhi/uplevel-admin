import "./assignment.css";
import { FiUpload } from "react-icons/fi";
import Navbar from "../navbar/navbar";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Success from "../success/success";
import { useNavigate } from "react-router-dom";

function Assignment() {
  const navigate = useNavigate();
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDomain, setAssignmentDomain] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentLevel, setAssignmentLevel] = useState("");
  const [loading, setLoading] = useState(false);

  const [base64, setBase64] = useState("");
  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      setBase64(base64);
    };
  };
  console.log(base64);
  const handleAssignmentUpload = async () => {
    try {
      setLoading(true);
      const data = {
        name: assignmentName,
        level: assignmentLevel,
        domain: assignmentDomain,
        base64: base64,
        desciption: assignmentDescription,
      };
      console.log(data);

      await axios
        .post("/api/assignment/save", data)
        .then((response) => {
          console.log("Success:", response);
        })
        .catch((error) => {
          console.error("Error", error);
        });
      navigate("/success");
    } catch (error) {
      console.log(error);
      alert("Form submission failed");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="loading">
        <Navbar />
        <div className="loading-icon">
          <CircularProgress className="loading-icon" />
        </div>
      </div>
    );
  }
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
            <input
              type="text"
              className="name-ipt"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
            ></input>
          </div>
          <div className="assignment-name">
            <span className="label">Assignment Description</span>
            <input
              type="text"
              className="name-ipt"
              value={assignmentDescription}
              onChange={(e) => setAssignmentDescription(e.target.value)}
            ></input>
          </div>
          <div className="assignment-domain">
            <span className="label">Assignment Domain</span>
            <select
              className="assignment-drp"
              onChange={(e) => setAssignmentDomain(e.target.value)}
            >
              <option value="choose">Choose</option>
              <option value="aptitude">Aptitude</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div className="assignment-level">
            <span className="label">Assignment Level</span>
            <select
              className="assignment-drp"
              onChange={(e) => setAssignmentLevel(e.target.value)}
            >
              <option value="choose">Choose</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="assignment-button">
            <button className="ass-btn" onClick={handleAssignmentUpload}>
              Upload{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
