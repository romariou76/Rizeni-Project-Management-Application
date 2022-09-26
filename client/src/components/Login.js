import React from 'react';
import '../styles/Login.css'

function Login(){
    return(
        <div className='login-container'>
            <form>
                <div className='login-form'>
                    <h2>Inicie Sesion</h2>
                    <div className='grupo'>
                        <input required/>
                        <label>Email</label>
                    </div>
  
                    <div className='grupo'>
                        <input required/>
                        <label>password</label>
                    </div>
                        <br></br>
                    <button>Ingresar</button>

                    <p>¿No tienes una cuenta?</p>
                    <a href='#register'>Registrate aqui</a>
                </div>
            </form>
        </div>
    )
}

export default Login;