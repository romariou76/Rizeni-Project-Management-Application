function Collaborator(props) {
  return(
  <div className="collaborator-item">
    <img className="foto-collaborator" src="https://placeimg.com/192/192/people"></img>
    <p className="name-collaborator">{props.name}</p>
    <p className="cargo-collaborator">{props.cargo}</p>
    <div className="collaborator-options">
      <p>Assign</p>
      <p>View</p>
    </div>
    <button>VIEW DETAILS</button>
  </div>
  )
}

export default Collaborator;