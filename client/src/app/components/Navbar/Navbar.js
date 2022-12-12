import React, { useState, useEffect } from 'react';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./Navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Navbar() {

  // Mostrar y guardar datos de los proyectos
  const [proyectos, setProyectos] = useState(() => {
    const saveProyectos = window.localStorage.getItem("proyectosData");
    if (saveProyectos) {
      return JSON.parse(saveProyectos);
    } else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("proyectosData", JSON.stringify(proyectos))
  }, [proyectos])


  return (
    <div className="navbar navbar-index text-white" data-aos="fade-in">

      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div> */}
        <div className="flex gap-x-4 p-2 font-bold navbar-links rounded-lg text-md">

        {
            proyectos.length === 0 ? <p className='text-black'>Sin titulo</p>
              : proyectos.map((proyecto, index) => {
                return <p>Proyecto {proyecto.nombre}</p>
              })
          }
        
        </div>
        <AvatarGroup className="avatar-group ml-8" max={6}>
            <Avatar alt="Remy Sharp" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            <Avatar alt="Travis Howard" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
            <Avatar alt="Cindy Baker" src="https://mdbcdn.b-cdn.net/img/new/avatars/3.webp" />
            <Avatar alt="Agnes Walker" src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" />
            <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp" />
            <Avatar alt="Trevor Henderson" src="https://ej2.syncfusion.com/demos/src/grid/images/5.png" />
          </AvatarGroup>
          <p className="invitar-buttom hover:bg-violet-700">Invitar</p>
      </div>


      <div className="navbar-center">
        {/* <a className="btn btn-ghost normal-case text-xl">RIZENI</a> */}
      </div>


      <div className="navbar-end">
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><a className='text-sm font-bold navbar-links rounded-lg'>Opciones</a></li>
            <li tabIndex={0}>
              <a className='text-sm font-bold navbar-links rounded-lg'>
                Menu
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a className='text-sm font-bold navbar-links rounded-lg'>Proyectos</a></li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Navbar;