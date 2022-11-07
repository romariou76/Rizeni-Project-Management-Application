import "../styles/Analisis.css"

function Analisis() {
  return ( 
    <div className="Analisis-container">
      <div className="navbar-analisis">
        <div className="title-analisis">
          <p>Task Management</p>
        </div>
      <div className="navbar-opciones">
          <p>Day</p>
          <p>Week</p>
          <p>Month</p>
          <p>Year</p>
      </div>
      
      </div>
      <div className="content-analisis"></div>      
    </div>
   );
}

export default Analisis;