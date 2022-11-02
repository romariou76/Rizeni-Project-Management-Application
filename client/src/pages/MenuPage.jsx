import "../styles/Menu.css";
import Todo from "../components/Todo";
import DashboardPage from "../components/DashboardPage"
import { MdDashboardCustomize } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import Collaborators from "../components/Collaborators";

function MenuPage() {
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

          <label>
            <IoLogOut />
            <a><Link to="/" className="p">Salir</Link></a>
          </label>

        </div>
      </div>
      <DashboardPage />
      {/* <Profile /> */}
      {/* <Collaborators /> */}
    </div>
  );
}
export default MenuPage;
