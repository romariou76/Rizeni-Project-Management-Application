import React from "react";
import { Routes, Route } from "react-router-dom";
import Collaborators from "./Collaborators";
import DashboardPage from "./DashboardPage";
import Profile from "./Profile";

const NavPage = () => {
    return (
            <Routes>
                <Route path="/collaborators" element={<Collaborators  />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
            </Routes>
     );
}
 
export default NavPage;