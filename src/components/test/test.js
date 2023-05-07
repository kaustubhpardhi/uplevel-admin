import { useState } from "react";
import Navbar from "../navbar/navbar";
import "./test.css";
import { FaPen, FaCheckDouble } from "react-icons/fa";
import axios from "axios";
function Test() {
  const [questionValue, setQuestionValue] = useState("");
  const [questionLevel, setQuestionLevel] = useState("");
  const [domainName, setDomainName] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [numOptions, setNumOptions] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleAddOption = () => {
    const newOption = document.querySelector(".ans-in").value;
    setQuestionOptions((prevOptions) => [...prevOptions, newOption]);
    document.querySelector(".ans-in").value = "";
    setNumOptions(numOptions + 1);
  };

  const handleSubmit = () => {
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

    axios
      .post("/api/questions", data)
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  const validateForm = () => {
    const errors = [];
    if (!questionValue) {
      errors.push("Question title is required");
    }
    if (!questionLevel) {
      errors.push("Question level is required");
    }
    if (!domainName) {
      errors.push("Question domain is required");
    }
    if (questionOptions.length < 2) {
      errors.push("At least two options are required");
    }
    if (!questionAnswer) {
      errors.push("Question answer is required");
    }
    return errors;
  };

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
              <input type="text" className="ans-in"></input>
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
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
              >
                <option value="apti">Aptitude</option>
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
