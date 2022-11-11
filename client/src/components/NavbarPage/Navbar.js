// import { FaUserCircle } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
import { FaRProject } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import LoginPage from '../../pages/LoginPage';

function Navbar() {
  return (
    <div className="Navbar">
      <div style={{ float: "left" }} className="logo">
        <FaRProject className="FaRProject" />
        <a href="#rizeni" className="rizeni">IZENI</a>
      </div>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <div className="register-button"><label htmlFor="my-modal-4">Ingresar</label></div>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <LoginPage />
</label>

    </div>
  );
}

export default Navbar;
