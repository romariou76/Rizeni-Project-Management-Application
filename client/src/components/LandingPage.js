import React from "react";
import hero from "../svg/logo6.svg";
import "../styles/LandingPage.css";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="hero">
        <div className="hero-info">
          <p>Bienvenido a RIzeni <br></br>Gestiona el desarrollo de tus proyectos</p>
          <w>Rizeni para todas las empresas e organizaciones</w>
          <br></br>
          <button className="login-button">Registrate ahora!</button>
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
