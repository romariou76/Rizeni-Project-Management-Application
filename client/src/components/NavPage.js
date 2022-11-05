import React from "react";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./Collaborators";
import DashboardPage from "./DashboardPage";
import WorkFlow from "./WorkFLow/WorkFLow"
import Profile from "./Profile";

const NavPage = () => {
    return (
            <Routes>
                <Route path="/collaborators" element={<Collaborators  />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/workflow" element={<WorkFlow/>} />
            </Routes>
     );
}
 
export default NavPage;