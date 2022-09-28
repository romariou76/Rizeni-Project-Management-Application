import '../styles/Dashboard.css'

function Dashboard(){
    return(
        <div className='dashboard-container'>
            <div className='db-column'>
                <div className='todo'>
                    <h2>Tareas</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
                <div className='todo'>
                    <h2>Tareas</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
                <div className='todo'>
                    <h2>Tareas</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
            </div>

            <div className='db-column'>
                <div className='todo'>
                    <h2>En desarrollo</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
                <div className='todo'>
                    <h2>En desarrollo</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
            </div>

            <div className='db-column'>
                <div className='todo'>
                    <h2>Finalizadas</h2>
                    <p>Crear la Api con Node</p>                
                    <label>
                        Asignado a: Romario
                        <p>Fecha limite:</p>
                    </label>
                </div>
            </div>
        </div> 
    )
}

export default Dashboard;