import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Todo from "./components/Todo";
import LandingPage from "./components/LandingPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingPage  />} />
          {/* <Route path="/" element={<Framer  />} /> */}
          <Route path="/menu" element={<Menu  />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </header>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
