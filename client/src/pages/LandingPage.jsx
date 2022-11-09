import React from "react";
import hero from "../svg/logo6.svg";
import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="hero">
        <div className="hero-info">
          <p>Bienvenido a Rizeni <br></br>
          <p>100% CSS Pure</p>Gestiona el desarrollo de tus proyectos con una interfaz sencilla y agradable</p>
          <w>Rizeni para la Corporación Yupanna</w>
          <br></br><br></br><br></br><br></br>
          <Link className="login-button" to="/register">Registrate ahora!</Link>
        </div>
        <div className="Landing-picture">
          <img className="hero-image" src={hero}></img>
        </div>

      </div>
      <svg className="svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            className="path"
            d="M-8.74,99.19 C264.95,64.64 256.49,237.34 527.93,54.78 L544.86,213.66 L-35.83,169.25 Z"
          ></path>
        </svg>
    </div>
  );
}

export default LandingPage;
