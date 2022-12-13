import Collaborators from "./Collaborators";
import "./Dashboard.css"
import Navbar from "../../app/components/Navbar/Navbar"
import Chart from "./Chart"
import { MdTask } from "react-icons/md";
import { FaUsers, FaUser } from "react-icons/fa";


function DashboardPage(props) {
    return (
        <div className="DashboardPage h-max">

            <Navbar />
            <div className="dashboard-main flex">

                <div className="dashboard-content p-4 ">
                    <div className="flex flex-row m-4 gap-8">
                        <div className="card bg-white p-4 w-[40rem] rounded-md">
                            <p className="text-black text-2xl font-bold mb-4">Buenas tardes Romario</p>
                            <p className="text-slate-500">Aquí puedes ver un resumen del estado, las prioridades y la
                                carga de trabajo, entre muchos otros aspectos, del proyecto Senati.
                            </p>
                        </div>

                        <div className="flex flex-col card rounded-md bg-white p-4 w-[40rem]">
                            <div className="flex justify-between">
                                <p className="text-black text-2xl font-bold mb-4">Estadísticas</p>
                                <p>Actualizado hace 1 dia</p>
                            </div>
                            <div className="flex gap-8">

                                <div className="flex items-center p-2 gap-6 justify-between w-auto">
                                    <div className="p-2 Statistics-badge rounded-full">
                                        <MdTask className="w-5 h-5 desktop:w-6 desktop:h-6 text-blue-500 opacity-100" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-black">95</p>
                                        <p>Tareas</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-2 gap-6 justify-between w-auto">
                                    <div className="p-2 Statistics-badge2 rounded-full">
                                        <FaUser className="w-5 h-5 desktop:w-6 desktop:h-6 text-green-500 opacity-100" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-black">10</p>
                                        <p>Colaboradores</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-2 gap-6 justify-between w-auto">
                                    <div className="p-2 Statistics-badge3 rounded-full">
                                        <MdTask className="w-5 h-5 desktop:w-6 desktop:h-6 text-red-400 opacity-100" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-black">10</p>
                                        <p>Colaboradores</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* ----------CARDS---------------- */}
                    <div className="flex gap-16">
                        <div className="w-64 rounded flex h-24 bg-white m-4 p-4 justify-around items-center">
                            <p>O</p>
                            <div className="flex-col">
                                <p className="text-black  font-bold">4 finalizados</p>
                                <p className="text-slate-500">En los últimos 7 dias</p>
                            </div>
                        </div>
                        <div className="w-64 rounded flex h-24 bg-white m-4 p-4 justify-around items-center">
                            <p>O</p>
                            <div className="flex-col">
                                <p className="text-black  font-bold">12 actualizados</p>
                                <p className="text-slate-500">En los últimos 7 dias</p>
                            </div>
                        </div>
                        <div className="w-64 rounded flex h-24 bg-white m-4 p-4 justify-around items-center">
                            <p>O</p>
                            <div className="flex-col">
                                <p className="text-black  font-bold">5 creados</p>
                                <p className="text-slate-500">En los últimos 7 dias</p>
                            </div>
                        </div>
                        <div className="w-64 rounded flex h-24 bg-white m-4 p-4 justify-around items-center">
                            <p>O</p>
                            <div className="flex-col">
                                <p className="text-black  font-bold">2 en riesgo</p>
                                <p className="text-slate-500">En los últimos 7 dias</p>
                            </div>
                        </div>
                    </div>
                    {/* ----------CARDS---------------- */}

                    <div className="flex m-4 gap-8">
                        <div className="participation rounded-lg 2xl:rounded-xs p-4">
                            <Chart />
                        </div>
                        <div className="bg-white mr-8 p-4 w-[40rem] h-96 rounded-lg">
                            <p>Actividad Reciente</p>
                            <p>Mantente al dia de lo que sucede en todo el proyecto.</p>
                        </div>
                    </div>

                    <div className="work-MG-content flex justify-start gap-x-5">
                        {/* CARD-RESUMEN-ANALISIS */}
                        <Collaborators
                            job="UX UI Design"
                            name="Eva Sofia"
                            progress="70"
                        // 
                        // 
                        />
                        <Collaborators
                            job="UX UI Design"
                            name="Eva Sofia"
                            progress="50"
                        // 
                        // 
                        />
                        <Collaborators
                            job="UX UI Design"
                            name="Eva Sofia"
                            progress="20"
                        // 
                        // 
                        />
                        <Collaborators
                            job="UX UI Design"
                            name="Eva Sofia"
                            progress="40"
                        // 
                        // 
                        />
                        <Collaborators
                            job="UX UI Design"
                            name="Eva Sofia"
                            progress="40"
                        // 
                        // 
                        />
                        {/* <Collaborators
                                job = "UX UI Design"
                                name = "Eva Sofia"
                                progress= "100"
                            /> */}
                    </div>

                    <div className="bg-white flex flex-col items-center w-96 gap-y-4 rounded-md shadow-md">
                        <div className="mt-4">
                            <p className="text-black text-xl font-bold">Goal Overview</p>
                        </div>
                        <div className="radial-progress text-green-500 m-4" style={{ "--value": "70", "--size": "12rem", "--thickness": "8px" }}><p className="text-black text-4xl">70%</p></div>
                        <div className="flex justify-around border-t-2 w-full">
                            <div className="flex flex-col items-center border-r-2 w-full p-2">
                                <p className="text-lg">Completed</p>
                                <p className="text-black text-xl">873633</p>
                            </div>
                            <div className="flex flex-col items-center w-full p-2">
                                <p className="text-lg">In Progress</p>
                                <p className="text-black text-xl">938474</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="sidebar-management p-8">

                    {/* Componente Progreso General */}
                    <div className="mb-8">
                        <p className="text-2xl text-center text-black font-bold">Progreso General</p>
                        <div className="flex justify-center self-center mt-8">
                            <div className="radial-progress text-purple-500" style={{ "--value": 70, "--size": "14rem", "--thickness": "10px" }}>
                                <div className="radial-progress text-yellow-500" style={{ "--value": 60, "--size": "12rem", "--thickness": "10px" }}><p className="text-black font-bold text-xl">75%</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Component Effyciencia */}
                    <div className=" w-auto mb-8 border-y- border-black">
                        <p className="text-sm text-black font-bold">Efficiency</p>
                        {/* <div className="flex space-x-2 mt-4">
                            <div className="radial-progress text-primary" style={{ "--value": "70", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">70%</p></div>
                            <div className="radial-progress text-yellow-500" style={{ "--value": "50", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">50%</p></div>
                            <div className="radial-progress text-green-500" style={{ "--value": "20", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">20%</p></div>
                            <div className="radial-progress text-red-500" style={{ "--value": "100", "--size": "3rem", "--thickness": "6px" }}><p className="text-xs font-bold text-black">100%</p></div>
                        </div>
                        <div className="flex justify-center space-x-12 text-black font-bold mt-1">
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                            <p>D</p>
                        </div> */}
                    </div>
                    {/* --------------------- */}

                    {/* Componente Completed TASK */}
                    <div className="flex-col mt-4">
                        <div>
                            <p className="text-sm text-black font-bold mb-5">Completed tasks</p>
                        </div>
                            {/* <div className="flex items-end space-x-1.5">
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
                                <p className="text-xs text-black">Romario</p>
                                <p className="text-xs text-black ml-5">Sofia</p>
                                <p className="text-xs text-black ml-7">Renato</p>
                                <p className="text-xs text-black ml-6">Olivia</p>
                            </div> */}

                    </div>
                </div>

            </div>
        </div>

    );
}

export default DashboardPage;