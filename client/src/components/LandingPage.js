import React from 'react';
import hero from '../images/hero.webp'
import '../styles/LandingPage.css'

function LandingPage(){
    return(
        <div className='hero'>
            <div className="hero-info">
                <p>
                    Bienvenidos a RIzeni aplicacion para administrar tus proyectos de cualquier tamaño
                </p>
                <w>
                    Rizeni para todas las empresas de todos los sabores pe
                </w><br></br>
                <button className='login-button'>Sign up for Rizeni</button>
            </div>
            <div className="Landing-picture">
                <img className='hero-image' src={hero}></img>
            </div>
        </div>
    )
}

export default LandingPage;