import "./Collaborators.css"
import Collaborator from "./Collaborator";
import Navbar from "../../app/components/Navbar/Navbar"
import TypeCollaborator from "./TypeCollaborator";
import Table from "./Table";
import { BiTask } from "react-icons/bi";


function Collaborators() {
  return (
    <div className="collaborators">
      <div className="collaborator-navbar">
        <Navbar />
      </div>

      <div className="collaborator-container">
        <div className="mb-4">
          <p className="text-black text-xl">Vista General</p>
          <p>Un rol brinda acceso a menús y funciones predefinidos según el rol asignado a un administrador que puede tener acceso a lo que necesita.</p>
        </div>

        <div className="collaborator-content flex justify-start gap-x-5">
          {/* --------------Componente collaborator------------ */}
          
          <Collaborator/>

        </div>

      </div>

      <div className="filtros-collaborator shadow-md flex-row justify-between">
        <div>
          <p className="text-black mb-2">Nombre</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option>Web Frontend</option>
              <option>Web Backend</option>
              <option>Tester</option>
            </select>          
          </div>
        </div>
        <div>
          <p className="text-black mb-2">Rol</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option>Web Frontend</option>
              <option>Web Backend</option>
              <option>Tester</option>
            </select>          
          </div>
        </div>
        <div>
          <p className="text-black mb-2">Estado</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>          
          </div>
        </div>  
       
      </div>

      <div className="collaborators-table-content">
        <p className="text-black text-xl">Total de usuarias con sus roles.</p>
        <p className="">Encuentre todas las cuentas de administrador de su empresa y sus roles asociados.</p>
        <div className="colaborator-items">
          <Table />
        </div>
      </div>
          <p className="">COPYRIGHT © 2022 Pixinvent, All rights ReservedHand-crafted & Made with</p>
    </div>
  );
}

export default Collaborators;