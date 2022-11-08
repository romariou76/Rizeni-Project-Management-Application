import Kanban from "./Kanban";
import "../../styles/TaskCard.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React, { useEffect, useState } from 'react'

function WorkFLow() {

  const [nombre, setNombre] = useState('');

  const getData = () => {
      return localStorage.getItem('nombre');
  }

  useEffect(() => {
      setNombre(getData());
  }, []);

  return (
    <div className="WorkFLow">
      <div className="work-navbar">
        <div>
          <p>hola Romario</p>
        </div>
        <p>Equipo { nombre }</p>
        <p>Invitar</p>
        <div>
          <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            <Avatar alt="Travis Howard" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
            <Avatar alt="Cindy Baker" src="https://mdbcdn.b-cdn.net/img/new/avatars/3.webp" />
            <Avatar alt="Agnes Walker" src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp" />
            <Avatar alt="Trevor Henderson" src="https://ej2.syncfusion.com/demos/src/grid/images/5.png" />
          </AvatarGroup>
        </div>
      </div>
      <Kanban />
    </div>
  );
}

export default WorkFLow;
