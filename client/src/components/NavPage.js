import React from "react";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./Collaborators";
import DashboardPage from "./DashboardPage";
import WorkFlow from "./WorkFLow/WorkFLow"
import Profile from "./Profile";
import Analisis from "./Analisis";

const NavPage = () => {
    return (
            <Routes>
                <Route path="/collaborators" element={<Collaborators  />} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/workflow" element={<WorkFlow/>} />
                <Route path="/analisis" element={<Analisis />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
     );
}
 
export default NavPage;