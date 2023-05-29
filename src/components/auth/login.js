import React, { useState } from "react";
import "./login.css";

const Login = () => {
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
        <h4 className="title">Welcome Back</h4>
        <form onSubmit={handleSubmit}>
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

          <div>
            <button type="submit" className="btn">
              Log In!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
