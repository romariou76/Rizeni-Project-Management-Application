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
        <div>
          <p className="overview-p">Vista General</p>
        </div>

        <div className="collaborator-content flex justify-start gap-x-5">
          {/* --------------Componente collaborator------------ */}
          
          <Collaborator/>

        </div>

      </div>

      <div className="filtros-collaborator shadow-md flex-row justify-between">
        <div>
          <p className="text-black mb-2">Rol</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option disabled selected>Web Frontend</option>
              <option>Web Backend</option>
              <option>Tester</option>
            </select>          
          </div>
        </div>
        <div>
          <p className="text-black mb-2">Rol</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option disabled selected>Web Frontend</option>
              <option>Web Backend</option>
              <option>Tester</option>
            </select>          
          </div>
        </div>
        <div>
          <p className="text-black mb-2">Rol</p>
          <div className="flex flex-row">
            <select className="select select-bordered select-filtro">
              <option disabled selected>Web Frontend</option>
              <option>Web Backend</option>
              <option>Tester</option>
            </select>          
          </div>
        </div>  
       
      </div>

      <div className="collaborators-table-content shadow-md">
        <p className="todays">Desarrolladores</p>
        <div className="colaborator-items">
          <div className="h-20 bg-primary-content">
            <p>Show 10 Entryes</p>
          </div>
          <Table />

          {/* <Collaborator name="Fernando" foto="foto" cargo="Frontend" />
          <Collaborator name="Paola" foto="foto" cargo="Backend" />
          <Collaborator name="Diego" foto="foto" cargo="Diseñador UI" />
          <Collaborator name="Sofia" foto="foto" cargo="Diseñador UX" /> */}
        </div>
      </div>

    </div>
  );
}

export default Collaborators;