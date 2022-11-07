import Kanban from "./Kanban";
import "../../styles/TaskCard.css"

function WorkFLow() {
  return ( 
    <div className="WorkFLow">
      <div className="work-navbar">
        <div>
                  <p>Proyecto Aguilas de VIlla</p>
        </div>

        <div>
          <p>Equipo DInamita</p>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>+4</span>
          <p>Invitar</p>
        </div>
      </div>
      <Kanban />
    </div>
   );
}

export default WorkFLow;