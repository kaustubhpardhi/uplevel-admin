import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Test from "./components/test/test";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Dashboard /> */}
      <Test />
    </div>
  );
}

export default App;
