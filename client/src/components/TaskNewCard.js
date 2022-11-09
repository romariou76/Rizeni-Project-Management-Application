import "../styles/TaskNewCard.css"

function TaskNewCard() {
    return (
        <div className='modal-task-create'>
            <p className='task-new-title'>Tarea nueva</p>
            <textarea className='input-new-task' placeholder='¿Qué se debe hacer?' data-autosize="true" dir='auto'></textarea>
            <div className='asignar-task-flex'>
                <p>Asignar a:</p>
                <select className="select-navbar">
                    <option value="0">Romario</option>
                    <option value="0">Juan</option>
                    <option value="1">Sofia</option>
                    <option value="2">Pedro</option>
                    <option value="3">Rene</option>
                </select>
            </div>
            <button className='save-button-task'>Guardar</button>
        </div>
    );
}

export default TaskNewCard;