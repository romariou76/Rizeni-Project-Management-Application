import "./App.css";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./components/RRHH/Collaborators";
import Profile from "./components/Profile/Profile";
import DashboardPage from "./components/Dashboard/DashboardPage";
import Roadmap from "./components/Roadmap/Roadmap";
import WorkFlow from "./components/WorkFLow/WorkFLow"
import Analisis from "./components/Analisis/Analisis";
// import Material from "./pages/Material"
import Home from './pages/Home';
import Pruebas from "./pages/Pruebas/Pruebas";
import Appp from './app/Appp';

function App() {
  return (
       <Routes>
         <Route path="/" element={<LandingPage />} ></Route>
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/pruebas" element={<Pruebas />} />
         <Route path="/home" element={<Home />} />

      
         <Route path="/menu" element={<MenuPage  />} >
           <Route path="/menu/collaborators" element={<Collaborators  />} />
           <Route path="/menu/dashboard" element={<DashboardPage/>} />
           <Route path="/menu/roadmap" element={<Roadmap/>} />
           <Route path="/menu/workflow" element={<WorkFlow />} />
            <Route path="/menu/new" element={<Appp />} />
           <Route path="/menu/profile" element={<Profile />} />
           <Route path="/menu/analisis" element={<Analisis />} />
         </Route>
       </Routes>
  );
}

export default App;

// https://lightrun.com/answers/remix-run-react-router-v6-feature-support-absolute-paths-in-descendant-routes