import "../styles/Register.css";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="left-container">
        <form>
          <div className="register-form">
            <h2 className="text-black text-xl font-bold">Registrese Ahora</h2>

            <div className="grupo-reg">
              <input className="text-slate-500" required placeholder="Nombre" />
            </div>
            <div className="grupo-reg">
              <input className="text-slate-500" required placeholder="Email" />
            </div>

            <div className="grupo-reg">
              <input className="text-slate-500" required placeholder="Rol" />
            </div>

            <div className="grupo-reg">
              <input className="text-slate-500" required placeholder="Password" />
            </div>

            <div className="grupo-reg">
              <input className="text-slate-500" required placeholder="Confirm Password" />
            </div>

            <br></br>
            <Link to="/login" className="regiter-buttom">Registrarse</Link>
            
          </div>
        </form>
        </div>

        <div className="right-container">
          <div>
            <p className="text-black font-bold">Utilize sus redes sociales </p>
            <div className="facebook-container"><AiFillFacebook className="AiFillFacebook"/>Accede con Facebook</div>
            <div className="twiter-container"><AiOutlineTwitter className="AiOutlineTwitter"/>Accede con Twiter</div>
            <div className="google-container"><FcGoogle className="FcGoogle" />Accede con Google</div>
            <div className="github-container"><AiFillGithub className="AiFillGithub" />Accede con GitHub</div>
          <Link to="/login" className="text-slate-500">¿Ya tiene una cuenta? Inicie sesión</Link>
          </div>
        </div>
    </div>
  );
}

export default RegisterPage;
