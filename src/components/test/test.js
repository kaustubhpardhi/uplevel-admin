import "./test.css";
import { FaPen, FaCheckDouble } from "react-icons/fa";
function Test() {
  return (
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
          <input type="text" className="qtn-title"></input>
        </div>
        <div className="opts-answer">
          <div className="question-options">
            <span className="form-label">Add Options</span>
            <input type="text" className="ans-in"></input>
            <button className="add-options-btn">Add Option</button>
          </div>
          <div className="question-answer">
            <span className="form-label">Enter the correct option</span>
            <input type="text" className="ans-in"></input>
          </div>
        </div>
        <div className="domain-level">
          <div className="question-domain">
            <span className="form-label">Select Question Domain</span>
            <select className="questions-drp">
              <option value="apti">Aptitude</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div className="question-level">
            <span className="form-label">Select Question Level</span>
            <select className="questions-drp">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="submit">
          <button className="submit-btn"> Add Question </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
