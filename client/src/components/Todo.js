import '../styles/Todo.css'

function Todo(){
    return(
        <div className="todo">
            <div className="todo-container">
                <label>---- --------</label>
                <label>Aprender React</label>
                <div>+ ...<label>foto</label></div>
                {/* <input placeholder="Ingrese una tarea"></input> */}
                {/* <label><button>+ Añada una tarjeta</button></label> */}
            </div>
        </div>
    )
}

export default Todo;