import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Test from "./components/test/test";
import Assignment from "./components/assignment/assignment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
