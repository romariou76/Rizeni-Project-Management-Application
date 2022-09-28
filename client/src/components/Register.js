import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <form>
        <div className="register-form">
          <h2>Registrese Ahora</h2>

          {/* <div className='grupo-reg'>
                        <input required/>
                        <label>Nombre</label>
          </div>
          <div className='grupo-reg'>
                        <input required/>
                        <label>Email</label>
          </div>

          <div className='grupo-reg'>
                        <input required/>
                        <label>Rol</label>
          </div>

          <div className='grupo-reg'>
                        <input required/>
                        <label>Password</label>
          </div>
          
          <div className='grupo-reg'>
                        <input required/>
                        <label>Confirm Password</label>
          </div> */}

          <div className="grupo-reg">
            <input required placeholder="nombre" />
          </div>
          <div className="grupo-reg">
            <input required placeholder="email" />
          </div>

          <div className="grupo-reg">
            <input required placeholder="rol" />
          </div>

          <div className="grupo-reg">
            <input required placeholder="password" />
          </div>

          <div className="grupo-reg">
            <input required placeholder="password" />
          </div>

          <br></br>
          <button>Registrarse</button>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">Ingresa aqui</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
