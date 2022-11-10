import "./Collaborators.css"
import Collaborator from "./Collaborator";
import UI from "../../images/ui.png"

function Collaborators() {
    return (
      <div className="collaborators">
        <div className="collaborator-navbar">
          <p>Team Members</p>
          <div class="group">
            <input placeholder="Search" type="search" className="input" />
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          </div>
        </div>

        <div className="collaborator-container">
          <div>
            <p className="overview-p">Overview</p>
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
          <p className="todays">Collaborators</p>
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