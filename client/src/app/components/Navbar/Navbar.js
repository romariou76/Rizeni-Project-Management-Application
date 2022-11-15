import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./Navbar.css";
import React, { useState, useEffect } from 'react';

function Mavbar() {

  // Retornando datos del proyecto
  const [nombre, setNombre] = useState('');

  const getData = () => {
      return localStorage.getItem('nombre');
  }

  useEffect(() => {
      setNombre(getData());
  }, []);

  return ( 
    <div className="work-navbar">
    <div className="workspace-nav">
          <p className="name-project">Proyecto {nombre}</p>
          <p className="name-org">Empresa Romario</p>
        
          <AvatarGroup className="avatar-group" max={6}>
            <Avatar alt="Remy Sharp" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            <Avatar alt="Travis Howard" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
            <Avatar alt="Cindy Baker" src="https://mdbcdn.b-cdn.net/img/new/avatars/3.webp" />
            <Avatar alt="Agnes Walker" src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp" />
            <Avatar alt="Trevor Henderson" src="https://ej2.syncfusion.com/demos/src/grid/images/5.png" />
          </AvatarGroup>
          <p className="invitar-buttom">Invitar</p>
        </div>
        <div>
          <p className="opciones-nav">Compartir</p>
        </div>
      </div>
   );
}

export default Mavbar;