import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingPage  />} />
          <Route path="/menu" element={<MenuPage  />} />
          <Route path="/collaborators" element={<Collaborators  />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
