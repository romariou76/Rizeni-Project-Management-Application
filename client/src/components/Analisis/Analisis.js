import "./Analisis.css"
import Tab from "./Tab"
import Navbar from "../../app/components/Navbar/Navbar"

function Analisis() {
  return ( 
    <div className="Analisis-container">

      <Navbar />

    <div className="box-analisis">

      <div className="content-analisis">
        <Tab />
      </div>

    </div>

    </div>
   );
}

export default Analisis;