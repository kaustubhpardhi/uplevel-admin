import "./success.css";
import Navbar from "../navbar/navbar";

const Success = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="success">
        <h2 className="success-title">Assignment Uploaded Successfully</h2>
      </div>
    </div>
  );
};
export default Success;
