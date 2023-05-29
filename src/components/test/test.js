import { useState } from "react";
import Navbar from "../navbar/navbar";
import "./test.css";
import { FaPen, FaCheckDouble } from "react-icons/fa";
import axios from "axios";
import Success from "../success/success";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [questionValue, setQuestionValue] = useState("");
  const [questionLevel, setQuestionLevel] = useState("");
  const [domainName, setDomainName] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [numOptions, setNumOptions] = useState(0);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddOption = () => {
    const newOption = document.querySelector(".ans-in").value;
    setQuestionOptions((prevOptions) => [...prevOptions, newOption]);
    document.querySelector(".ans-in").value = "";
    setNumOptions(numOptions + 1);
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const errors = validateForm();
      if (errors.length > 0) {
        setErrors(errors);
        return;
      }
      const data = {
        question: questionValue,
        level: questionLevel,
        domain: domainName,
        options: questionOptions,
        answer: questionAnswer,
      };
      console.log(data);

      await axios
        .post("/api/questions/addquestion", data)
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
    }
  };
  const validateForm = () => {
    const errors = [];
    if (!questionValue) {
      errors.push("Question title is required");
    }
    // if (!questionLevel) {
    //   errors.push("Question level is required");
    // }
    // if (!domainName) {
    //   errors.push("Question domain is required");
    // }
    if (questionOptions.length < 2) {
      errors.push("At least two options are required");
    }
    if (!questionAnswer) {
      errors.push("Question answer is required");
    }
    return errors;
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
      <div className="test">
        <div className="test-header">
          <div className="test-header-title">
            <FaCheckDouble />
            <p className="th-title">Add Question</p>
          </div>
          <span className="test-header-body">
            Enhance the tests with your questions
          </span>
        </div>
        <div className="test-form">
          <div className="question-title">
            <span className="form-label">Question Title</span>
            <input
              type="text"
              className="qtn-title"
              value={questionValue}
              onChange={(e) => setQuestionValue(e.target.value)}
            ></input>
          </div>
          <div className="opts-answer">
            <div className="question-options">
              <span className="form-label">Add Options</span>
              <input type="text" className="ans-in-op"></input>
              <button className="add-options-btn" onClick={handleAddOption}>
                Add Option
              </button>
              <span>{numOptions} options added</span>
            </div>
            <div className="question-answer">
              <span className="form-label">Enter the correct option</span>
              <input
                type="text"
                className="ans-in"
                value={questionAnswer}
                onChange={(e) => {
                  setQuestionAnswer(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="domain-level">
            <div className="question-domain">
              <span className="form-label">Select Question Domain</span>
              <select
                className="questions-drp"
                onChange={(e) => setDomainName(e.target.value)}
              >
                <option value="choose">Choose</option>
                <option value="apti">Aptitude</option>
                <option value="backend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <div className="question-level">
              <span className="form-label">Select Question Level</span>
              <select
                className="questions-drp"
                value={questionLevel}
                onChange={(e) => setQuestionLevel(e.target.value)}
              >
                <option value="easy">Choose</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="submit">
            <button className="submit-btn" onClick={handleSubmit}>
              {" "}
              Add Question{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
