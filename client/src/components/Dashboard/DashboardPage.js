import Collaborators from "./Collaborators";
import "./Dashboard.css"
import NavbarDashboard from './NavbarDashboard';
import Chart from "./Chart"

function DashboardPage() {
    return (
        <div className="DashboardPage">

            <NavbarDashboard />
            <div className="dashboard-main flex">

                <div className="dashboard-content">
                    <div className="participation rounded-lg">

                        <Chart />

                    </div>
                    <div className="work-MG-content space-x-4">
                        {/* CARD-RESUMEN-ANALISIS */}
                            <Collaborators />
                    </div>
                </div>

                <div className="sidebar-management">

                    {/* Componente Progreso General */}
                    <div className="mb-8">
                        <p className="text-lg text-black font-bold">Progreso General</p>
                        <div className="flex justify-center self-center mt-4">
                            <div className="radial-progress text-purple-500" style={{ "--value": 80, "--size": "8rem", "--thickness": "12px" }}>
                                <div className="radial-progress text-yellow-500" style={{ "--value": 60, "--size": "6rem", "--thickness": "12px" }}><p className="text-black font-bold text-xl">75%</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Component Effyciencia */}
                    <div className=" w-auto mb-8 border-y- border-black">
                        <p className="text-sm text-black font-bold">Efficiency</p>
                        <div className="flex space-x-2 mt-4">
                            <div className="radial-progress text-primary" style={{ "--value": "70", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">70%</p></div>
                            <div className="radial-progress text-yellow-500" style={{ "--value": "70", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">70%</p></div>
                            <div className="radial-progress text-green-500" style={{ "--value": "70", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">70%</p></div>
                            <div className="radial-progress text-red-500" style={{ "--value": "70", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">70%</p></div>
                        </div>
                        <div className="flex justify-center space-x-12 text-black font-bold mt-1">
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                            <p>D</p>
                        </div>
                    </div>
                    {/* --------------------- */}

                    {/* Componente Completed TASK */}
                    <div className="flex-col mt-4">
                        <div>
                            <p className="text-sm text-black font-bold mb-5">Completed tasks</p>
                        </div>
                        <div className="flex items-end space-x-1.5">
                            <span className="w-3.5 h-16 bg-yellow-500 rounded-md"></span>
                            <span className="w-3.5 h-12 bg-purple-500 rounded-md"></span>
                            <p></p><p></p><p></p>
                            <span className="w-3.5 h-8 bg-red-500 rounded-md"></span>
                            <span className="w-3.5 h-10 bg-indigo-500 rounded-md"></span>
                            <p></p><p></p><p></p>
                            <span className="w-3.5 h-14 bg-yellow-500 rounded-md"></span>
                            <span className="w-3.5 h-16 bg-blue-500 rounded-md"></span>
                            <p></p><p></p><p></p>
                            <span className="w-3.5 h-8 bg-red-500 rounded-md"></span>
                            <span className="w-3.5 h-12 bg-green-500 rounded-md"></span>
                        </div>
                        <div className="flex space-x-9 mt-2">
                            <p className="text-sm font-bold text-black">210</p>
                            <p className="text-sm font-bold text-black">210</p>
                            <p className="text-sm font-bold text-black">210</p>
                            <p className="text-sm font-bold text-black">210</p>
                        </div>
                        <div className="flex mt-1">
                            {/* <p className="text-[10px] text-black">Romario</p> */}
                            <p className="text-xs text-black">Romario</p>
                            <p className="text-xs text-black ml-5">Sofia</p>
                            <p className="text-xs text-black ml-7">Renato</p>
                            <p className="text-xs text-black ml-6">Olivia</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default DashboardPage;