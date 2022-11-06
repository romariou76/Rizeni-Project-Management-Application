import "../styles/Collaborators.css"
import Collaborator from "./Collaborator";

function Collaborators() {
    return ( 
        <div className="collaborators">
            <div className="collaborator-navbar">
                <p>Collaborators</p>
            </div>
            <div className="collaborator-content">
                <div className="colaborator-items">
                    <Collaborator
                        name="Fernando"
                        foto="foto"
                        cargo="Frontend"
                    />
                    <Collaborator
                        name="Paola"
                        foto="foto"
                        cargo="Backend"
                    />
                    <Collaborator
                        name="Diego"
                        foto="foto"
                        cargo="Diseñador UI"
                    />
                    <Collaborator
                        name="Sofia"
                        foto="foto"
                        cargo="Diseñador UX"
                    />
                    <Collaborator
                        name="Sofia"
                        foto="foto"
                        cargo="Analista"
                    />
                </div>
                <div className="collaborator-process">
                </div>
            </div>
        </div>
     );
}

export default Collaborators;