import React, { useState, useEffect } from 'react';
import "../styles/WorkSpace.css"
import TextField from '@mui/material/TextField';
import Herowork from "../images/hero-work.png"
import { Link } from 'react-router-dom';

function CreateProject({addProyecto}) {




  const [projectData, setProjectData] = useState({
    nombre: '',
    tipo: '',
    descripcion: '',
    id: null
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (projectData.nombre !== '' && projectData.descripcion !== '' ){

    projectData.id = Math.floor(Math.random() * 100)
    addProyecto(projectData)
    setProjectData({
      nombre: '',
      tipo: '',
      descripcion: '',
      id: null
    })
  } else {
    alert("Por favor agregue un nombre y descripcion")
  }
}

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    })    
  }
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

  <form onSubmit={handleSubmit}>
    <div className='WorkSpace'>
      <div className='form-modal'>
        <p className='text-lg text-black font-bold mb-4'>Vamos a crear un Proyecto<br></br></p>
        <p className='mb-4 text-slate-500'>Impulse su productividad facilitandoles a todos <br></br> el acceso al flujo de trabajo en una unica ubicacion </p>
        <br></br>
        <p className='title-space-style mb-1 text-black'>Nombre del nuevo Proyecto</p>
        <TextField className='TextField' name='nombre' placeholder='Ingrese un nombre' onChange={handleChange} value={projectData.nombre}/>
        <p className='title-single-style mt-2 text-slate-500'>Este es el nombre de su empresa, equipo o organizacion</p>
        <br></br>
        <p className='font-bold mb-2 text-black'>Tipo de Proyecto</p>
        <select className='select-project text-slate-500' name="tipo" onChange={handleChange}>
          <option>Marketing</option>
          <option>Educacion</option>
          <option>Facturacion</option>
          <option>Ingenieria</option>
          <option>Trabajo</option>
          <option>Desarrollo</option>
          <option>Salud</option>
        </select>
        <p className='title-single-style mt-2 text-slate-500'>El tipo de proyecto ayudara en el desarrollo del proyecto</p>
        <br></br>
        <p className='title-description-style mb-2 text-black'>Descripcion del Proyecto</p>
        <textarea className='text-area-space text-slate-500' name="descripcion" onChange={handleChange} value={projectData.descripcion}></textarea>
        <br></br>
        {/* <p className='title-single-style'>Incorpora a los miembros con unas cuantas palabras sobre tu espacio <br></br> de trabajo</p> */}
        {/* <Link to="/menu/new" className='continue-bottom'>Continuar</Link> */}
        <input type="submit" value="Agregar" onClose={handleClose}/>
      </div>
      {/* <div>
      <svg className='hero-wave' width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 115.08133971291863,348.4593301435407 230.16267942583727,396.91866028708137 318,406 C 405.83732057416273,415.08133971291863 466.43062200956945,384.78468899521533 541,335 C 615.5693779904306,285.21531100478467 704.1148325358851,215.9425837320574 821,224 C 937.8851674641149,232.0574162679426 1083.1100478468902,317.44497607655506 1191,343 C 1298.8899521531098,368.55502392344494 1369.444976076555,334.27751196172244 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#9900ef" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(270 940 80)"></path></svg>
      </div> */}
      <div className='hero-modal'>
        <img className='hero-img-work' alt='hero-work' src={Herowork}></img>
      </div>
    </div>
  </form>
  );
}

export default CreateProject;