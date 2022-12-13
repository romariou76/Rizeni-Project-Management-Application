import Avatar from "./Avatar.js";
import React from "react";
import "./Profile.css";
import Stat from "./Stat.js";
import NameUser from "./NameUser.js";
import Navbar from '../../app/components/Navbar/Navbar';
import CardStat from "./CardStat.js";
import Chart from "./charts/Chart"
import AreaChart from "./charts/AreaChart";
import Actividad from "./Actividad.js";
import CardCTL from './CardCTL';

function Profile(props) {
  return (
    <div className="Profile-col">
      <Navbar />
      <div className="Profile">
        <div className="profile-info p-8">

          <p className="text-black font-bold text-lg">Vision General</p>
          <div className="flex space-x-8">
            <CardCTL></CardCTL>



            <div className="bg-white flex flex-col items-center w-96 gap-y-4 rounded-md shadow-md">
                    <div className="mt-4">
                        <p className="text-black text-xl font-bold">Goal Overview</p>
                    </div>
                    <div className="radial-progress text-green-500 m-2" style={{ "--value": "70", "--size": "10rem", "--thickness": "8px" }}><p className="text-black text-4xl">70%</p></div>
                    <div className="flex justify-around border-t-2 w-full">
                        <div className="flex flex-col items-center border-r-2 w-full p-2">
                            <p className="text-lg">Completado</p>
                            <p className="text-black text-xl">4</p>
                        </div>
                        <div className="flex flex-col items-center w-full p-2">
                            <p className="text-lg">En Progreso</p>
                            <p className="text-black text-xl">3</p>
                        </div>
                    </div>
                </div>


                

          </div>

            <div className="overview pr-16 mt-2">
              <p className="text-black font-bold text-lg mb-4">Historial de Tareas</p>
              <div className="flex justify-start gap-x-2 desktop:justify-start desktop:gap-16">
                <CardStat />
              </div>
            </div>

            <p className="text-black font-bold text-lg mb-4">Densidad de trabajo</p>
            <div className="dendem flex mt-2">
              <div className="density rounded-lg w-96">
                <AreaChart />
              </div>
              <div className="demography rounded-lg">
                <Chart />
              </div>
            </div>

          <div className="activity-user">
            {/* <Actividad /> */}
          </div>

          {/* <div className="active-users"></div> */}
        </div>

        <div className="profile">
          <div className="flex justify-center content-center py-4 mt-2">
            <Avatar />
          </div>
          <NameUser />
          <Stat />
          <p className="text-black text-lg ml-5 my-2 font-bold">Detalles</p>
          <div className="px-5 flex flex-col gap-y-2">
            <p className="text-black">Username: <span className="opacity-40">Romario</span></p>
            <p className="text-black">Correo: <span className="opacity-40">romario@gmail.com</span></p>
            <p className="text-black">Estado: <span className="opacity-40">Activo</span></p>
            <p className="text-black">Rol: <span className="opacity-40">UX Design</span></p>
            <p className="text-black">ID: <span className="opacity-40">Tax-9151</span></p>
            <p className="text-black">Contacto: <span className="opacity-40">(+51) 900151546</span></p>
            <p className="text-black">Lenguaje: <span className="opacity-40">Español</span></p>
            <p className="text-black">Nacionalidad: <span className="opacity-40">Peruano</span></p>
            <div className="flex justify-start gap-x-8 mt-4">
              <button className="btn btn-active btn-info text-white px-10">Editar</button>
              <button className="btn btn-outline btn-error">Suspender</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
