import '../styles/Todo.css'

function Todo(){
    return(
        <div className="todo">
            <div className="todo-container">
                <label>Lista de tareas</label>
                <input placeholder="Ingrese una tarea"></input>
                <label><button>+ Añada una tarjeta</button></label>
            </div>
        </div>
    )
}

export default Todo;