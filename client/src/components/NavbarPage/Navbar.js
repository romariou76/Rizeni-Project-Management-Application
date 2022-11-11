// import { FaUserCircle } from "react-icons/fa";
// import { IoIosNotifications } from "react-icons/io";
import { FaRProject } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div style={{ float: "left" }} className="logo">
        <FaRProject className="FaRProject" />
        <a href="#rizeni" className="rizeni">IZENI</a>
      </div>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <div className="register-button"><Link to="/login">Ingresar</Link></div>

      {/* <a >
        <FaUserCircle className="FaUserCircle" />
      </a>

      <a>
        <IoIosNotifications className="IoIosNotifications" />
      </a> */}
    </div>
  );
}

export default Navbar;