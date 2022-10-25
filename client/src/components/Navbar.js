import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaRProject } from "react-icons/fa";
import {Link } from "react-router-dom"
import "../styles/Navbar.css";
import React from "react";

function Navbar() {
  return (
  <div className="Navbar">
      <div style={{ float: "left" }} className="logo">
        <FaRProject className="FaRProject" />
        <a>izeni</a>
      </div>

      <a>Home</a>
      <a>About</a>
      <a>
      <Link to="/login">Salir</Link>
      </a>
      <a>Login</a>
      <a style={{ float: "right" }}>
        <FaUserCircle className="FaUserCircle" />
      </a>

      <a>
        <IoIosNotifications className="IoIosNotifications" />
      </a>
    </div>
  );
}

export default Navbar;
