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
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
   
  );
}
export default Menu;
