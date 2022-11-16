import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CreateProject from './CreateProject';
import "../styles/NavbarMain.css"
import "../styles/Home.css"
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 20,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Retornando datos del proyecto
  const [nombre, setNombre] = useState('');

  const getData = () => {
    return localStorage.getItem('nombre');
  }

  useEffect(() => {
    setNombre(getData());
  }, []);

  return (
    <div>
      <ul className="NavbarMain">
        <div className="content-navbar">
          <li><a href="default.asp">RIZENI</a></li>
          <li><a href="news.asp">Tu trabajo</a></li>
          <li><select className="select-navbar">
              <option value="0">Proyectos</option>
              <option value="0">Rizeni</option>
              <option value="1">PeepoApp</option>
              <option value="2">Optical UI</option>
              <option value="3">PeepoPay</option>
          </select></li>
          <li><a href="about.asp">Filtros</a></li>
          <li><a href="about.asp">Paneles</a></li>
          <li><a href="about.asp">Personas</a></li>
          <li><a href="/">Salir</a></li>
          <button onClick={handleOpen} className="button-modal">Crear</button>
        </div>
        <div className="content-navbar">
          <li><a href="about.asp">logos</a></li>
          <div class="search-navbar">
            <input placeholder="Search" type="search" className="input-search-navbar" />
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          </div>
          <li><a href="about.asp">Perfil</a></li>
        </div>
      </ul>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateProject />
        </Box>
      </Modal>

      <div className='home-content'>
        <h1>Tu trabajo</h1>
        <br></br>
        <h3>Tus proyectos recientes</h3>
        <div className='projects-container-links'>
          <Link to="/menu" className="project-name-link">{nombre}</Link>
          <Link to="/menu" className="project-name-link">PeepoPay</Link>
          <Link to="/menu" className="project-name-link">SentioCLub</Link>
          <Link to="/menu" className="project-name-link">Css Project</Link>
        </div>
      </div>
    </div>
  );
}