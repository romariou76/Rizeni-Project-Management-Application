function Collaborator(props) {
  return(
  <div className="collaborator-item">
    <h4>{props.name}</h4>
    <span className="foto-collaborator"></span>
    <p>{props.cargo}</p>
  </div>
  )
}

export default Collaborator;