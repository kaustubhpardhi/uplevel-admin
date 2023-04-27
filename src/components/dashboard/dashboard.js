import "./dashboard.css";
import profile from "./assets/passport.jpg";
import Navbar from "../navbar/navbar";

function Dashboard() {
  return (
    <div className="container">
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-nav">
          <div className="dashboard-nav-date">
            <span className="nav-date-title">Your Metrics 🔗</span>
            <span className="nav-date-value">25/04/2023</span>
          </div>
          <div className="dashboard-profile">
            <img src={profile} alt="profile" className="profile-img" />
            <div className="profile-details">
              <span className="profile-title">Kaustubh</span>
              <span className="profile-role">Backend</span>
            </div>
          </div>
        </div>
        <div className="dashboard-hero">
          <div className="metric metric-one">
            <p>Total Students</p>
          </div>
          <div className="metric metric-two">
            <p>Total Students</p>
          </div>
          <div className="metric metric-three">
            <p>Total Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
