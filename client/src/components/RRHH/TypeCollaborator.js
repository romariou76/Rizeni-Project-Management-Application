import UI from "../../images/ui.png"


function TypeCollaborator(props) {
  return (
    <div className="roles-content">
      <img alt="UI" src={UI} className="rol-logo"></img>
      <div className="rol-info">
        <div className="rol-info1">{props.cantidad}</div>
        <div className="rol-info2">{props.type}</div>
      </div>
    </div>
  );
}

export default TypeCollaborator;