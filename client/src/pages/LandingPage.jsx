import React from "react";
import hero from "../svg/logo6.svg";
import "../styles/LandingPage.css";
import Navbar from "../components/NavbarPage/Navbar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="hero">
        <div className="hero-info">
          <p>Bienvenido a Rizeni <br></br>
          Gestiona el desarrollo de tus tareas en tus proyectos con una interfaz sencilla y agradable</p>
          <w className="mt-8">Rizeni para la Corporación Yupanna S.A.C.</w>
          <Link className="login-button my-12" to="/register">Registrate ahora!</Link>
        </div>
        <div className="Landing-picture">
          <img className="hero-image" src={hero} alt="hero-img"></img>
        </div>

      </div>
     
    </div>
  );
}

export default LandingPage;
