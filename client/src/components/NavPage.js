import React from "react";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./RRHH/Collaborators";
import DashboardPage from "./Dashboard/DashboardPage";
import Profile from "./Profile/Profile";
import Analisis from "./Analisis/Analisis";
import Appp from '../app/Appp';
import Roadmap from "./Roadmap/Roadmap"
import Tasks from './Tasks/Tasks';

const NavPage = () => {
    return (
            <Routes>
                <Route path="/collaborators" element={<Collaborators  />} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/roadmap" element={<Roadmap/>} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/analisis" element={<Analisis />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/new" element={<Appp />} />
            </Routes>
     );
}
 
export default NavPage;