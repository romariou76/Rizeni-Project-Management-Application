import React, { useState } from 'react';
import "../styles/WorkSpace.css"
import TextField from '@mui/material/TextField';
import Herowork from "../images/hero-work.png"
import { Link } from 'react-router-dom';

function CreateProject() {

  // Codigo para el guardado en LocalStorage
  const [inputText, setinputText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value
    setinputText(text);
    console.log(inputText);
  }

  const saveData = () => {
    localStorage.setItem('nombre', inputText);
    alert('Has guardado pe');
  }
  // ----------------------------

  return (
    <div className='WorkSpace'>
      <div className='form-modal'>
        <h2>Vamos a crear un Espacio de<br></br>trabajo</h2>
        <p>Impulse su productividad facilitandoles a todos <br></br> el acceso a los tableros en una unica ubicacion </p>
        <br></br>
        <p className='title-space-style'>Nombre del Espacio de trabajo</p>
        <TextField onChange={handleInputChange} className='TextField' id="outlined-basic" label="" placeholder='ingrese...' variant="outlined" />
        <p className='title-single-style'>Este es el nombre de su empresa, equipo o organizacion</p>
        <br></br>
        <p className='title-space-style'>Tipo de Espacio de trabajo</p>
        <select>
          <option>La primera opción</option>
          <option>La segunda opción</option>
          <option>La tercera opción</option>
          <option>La tercera opción</option>
          <option>La tercera opción</option>
        </select>
        <br></br>
        <p className='title-space-style'>Descripcion del Espacio de trabajo</p>
        <input className='text-area-space'>
        </input>
        <br></br>
        <p className='title-single-style'>Incorpora a los miembros con unas cuantas palabras sobre tu espacio <br></br> de trabajo</p>
        <Link onClick={saveData} to="/menu" className='continue-bottom'>Continuar</Link>
        <Link to="/menu" className='continue-bottom'>Ingresar</Link>
      </div>
      {/* <div>
      <svg className='hero-wave' width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 115.08133971291863,348.4593301435407 230.16267942583727,396.91866028708137 318,406 C 405.83732057416273,415.08133971291863 466.43062200956945,384.78468899521533 541,335 C 615.5693779904306,285.21531100478467 704.1148325358851,215.9425837320574 821,224 C 937.8851674641149,232.0574162679426 1083.1100478468902,317.44497607655506 1191,343 C 1298.8899521531098,368.55502392344494 1369.444976076555,334.27751196172244 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#9900ef" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(270 940 80)"></path></svg>
      </div> */}
      <div className='hero-modal'>
        <img className='hero-img-work' alt='hero-work' src={Herowork}></img>
      </div>
    </div>
  );
}

export default CreateProject;