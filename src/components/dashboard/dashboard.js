import "./dashboard.css";
import profile from "./assets/passport.jpg";
import Navbar from "../navbar/navbar";

function Dashboard() {
  let today = new Date().toLocaleDateString();
  console.log(today);
  return (
    <div className="container">
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-nav">
          <div className="dashboard-nav-date">
            <span className="nav-date-title">Your Metrics 🔗</span>
            <span className="nav-date-value">{today}</span>
          </div>
          <div className="dashboard-profile">
            <img src={profile} alt="profile" className="profile-img" />
            <div className="profile-details">
              <span className="profile-title">Kaustubh</span>
              <span className="profile-role">Test Admin</span>
            </div>
          </div>
        </div>
        <div className="dashboard-hero">
          <div className="metric metric-one">
            <p>Total Submissions</p>
          </div>
          <div className="metric metric-two">
            <p>Reviewed Candiates </p>
          </div>
          <div className="metric metric-three">
            <p>Hired Candidates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
