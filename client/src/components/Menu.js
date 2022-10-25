import "../styles/Menu.css";
import Todo from "./Todo";

function Menu() {
  return (
    <div className="Menu-container">
      <div className="Menu">
        <div className="menu-main">
          <h4>Espacio de trabajo de romario</h4>
        </div>
        <div className="menu-options">
          <label> + Tableros</label>
          <label> + Miembros</label>
          <label> + Configuracion</label>
          <h4>Vistas del Espacio de trabajo</h4>
          <label> + Tabla</label>
          <label> + Calendario</label>
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
          <Todo/>
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
