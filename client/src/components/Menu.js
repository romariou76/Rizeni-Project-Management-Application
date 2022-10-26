import "../styles/Menu.css";
import Todo from "./Todo";
import { MdDashboardCustomize } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

function Menu() {
  return (
    <div className="Menu-container">
      <div className="Menu">
        <div className="menu-main">
          <h4>RIZENI</h4>
        </div>
        <div className="menu-options">
          <label>
            <MdDashboardCustomize />
            <p>Dashboard</p>
          </label>

          <label>
            <BiMessageDetail />
            <p>Mensajes</p>
          </label>

          <label>
            <MdTask />
            <p>Tareas</p>
          </label>

          <label>
            <SiGoogleanalytics />
            <p>Analisis</p>
          </label>

          <label>
            <VscCalendar />
            <p>Calendario</p>
          </label>

          <label>
            <FaUsers />
            <p>Colaboradores</p>
          </label>
          
        </div>
      </div>
      <div className="dashboard_menu">
        <div className="column-todo">
          <div className="head-column">
            <p>Por hacer</p>
            <p>...</p>
          </div>
        </div>

        <div className="column-progress">
          <div className="head-column">
            <p>En progreso</p>
            <p>...</p>
          </div>
          <Todo />
        </div>

        <div className="column-finalized">
          <div className="head-column">
            <p>Finalizado</p>
            <p>...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
