import "./Collaborators.css"
import Collaborator from "./Collaborator";
import UI from "../../images/ui.png"
import Navbar from "../../app/components/Navbar/Navbar"


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
          <div className="collaborator-content">

{/* --------------Componente collaborator------------ */}
            <div className="roles-content">
              <img alt="UI" src={UI} className="rol-logo"></img>
              <div className="rol-info">
                <div className="rol-info1">5</div>
                <div className="rol-info2">Node.js Developers</div>
              </div>
            </div>
            <div className="roles-content">
              <img alt="UI" src={UI} className="rol-logo"></img>
              <div className="rol-info">
                <div className="rol-info1">5</div>
                <div className="rol-info2">Node.js Developers</div>
              </div>
            </div>
            <div className="roles-content">
              <img alt="UI" src={UI} className="rol-logo"></img>
              <div className="rol-info">
                <div className="rol-info1">5</div>
                <div className="rol-info2">Node.js Developers</div>
              </div>
            </div>
            <div className="roles-content">
              <img alt="UI" src={UI} className="rol-logo"></img>
              <div className="rol-info">
                <div className="rol-info1">5</div>
                <div className="rol-info2">Node.js Developers</div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="collaborators-card-content">
          <p className="todays">Desarrolladores</p>
          <div className="colaborator-items">
            <Collaborator name="Fernando" foto="foto" cargo="Frontend" />
            <Collaborator name="Paola" foto="foto" cargo="Backend" />
            <Collaborator name="Diego" foto="foto" cargo="Diseñador UI" />
            <Collaborator name="Sofia" foto="foto" cargo="Diseñador UX" />
          </div>
        </div>
      </div>
    );
}

export default Collaborators;