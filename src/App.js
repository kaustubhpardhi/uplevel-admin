import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
