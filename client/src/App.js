import "./App.css";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./components/Collaborators";
import Profile from "./components/Profile";
import DashboardPage from "./components/DashboardPage";
import WorkFlow from "./components/WorkFLow/WorkFLow"
import Analisis from "./components/Analisis";
// import Material from "./pages/Material"
import Home from './pages/Home';

function App() {
  return (
       <Routes>
         <Route path="/" element={<LandingPage />} ></Route>
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/home" element={<Home />} />
      
         <Route path="/menu" element={<MenuPage  />} >
           <Route path="/menu/collaborators" element={<Collaborators  />} />
           <Route path="/menu/dashboard" element={<DashboardPage/>} />
           <Route path="/menu/workflow" element={<WorkFlow />} />
           <Route path="/menu/profile" element={<Profile />} />
           <Route path="/menu/analisis" element={<Analisis />} />
         </Route>
       </Routes>
  );
}

export default App;

// https://lightrun.com/answers/remix-run-react-router-v6-feature-support-absolute-paths-in-descendant-routes