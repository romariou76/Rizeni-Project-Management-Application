import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <form>
        <div className="login-form">
          <h2>Inicie Sesion</h2>
          <div className="grupo">
            <input required />
            <label>Email</label>
          </div>

          <div className="grupo">
            <input required />
            <label>password</label>
          </div>
          <br></br>
          {/* <button>Ingresar</button> */}
          <Link className="button" to="/menu">
            Ingresar
          </Link>

          <p>¿No tienes una cuenta?</p>
          <Link to="/register">Registrate aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
