import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [assignmentDomain, setAssignmentDomain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic or API request here
    console.log("Form submitted:", { name, email, password });
  };

  return (
    <div className="reg-container">
      <div className="form_area">
        <h4 className="title">Create Account</h4>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name" className="sub_title">
              Name
            </label>
            <input
              type="text"
              className="form_style"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="email" className="sub_title">
              Email
            </label>
            <input
              type="email"
              className="form_style"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_group">
            <label htmlFor="password" className="sub_title">
              Password
            </label>
            <input
              type="password"
              className="form_style"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form_group">
            <span className="sub_title">Assignment Domain</span>
            <select
              className="form_style"
              onChange={(e) => setAssignmentDomain(e.target.value)}
            >
              <option value="apti">Aptitude</option>
              <option value="backend">Backend</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn">
              SIGN UP!
            </button>
            <p>
              Have an Account?{" "}
              <a href="/" className="link">
                Login Here!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
