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

function Profile(props) {
  return (
    <div className="Profile-col">
      <Navbar />
      <div className="Profile">
        <div className="profile-info">

          <p className="text-black font-bold text-lg">Vision General</p>
            <overview className="overview pr-16 mt-2">
              <div className="flex justify-start gap-x-2 desktop:justify-start desktop:gap-16">
                <CardStat />
              </div>
            </overview>

            <p className="text-black font-bold text-lg">Densidad de trabajo</p>
            <div className="dendem flex mt-2">
              <div className="density rounded-lg w-96">
                <AreaChart />
              </div>
              <demography className="demography rounded-lg">
                <Chart />
              </demography>
            </div>

          <div className="activity-user">
            <Actividad />
          </div>

          {/* <div className="active-users"></div> */}
        </div>

        <div className="profile">
          <div className="flex justify-center content-center py-4">
            <Avatar />
          </div>
          <NameUser />
          <Stat />
          <p className="text-black text-lg ml-5 my-2 font-bold">Detalles</p>
          <div className="px-5 flex flex-col gap-y-2">
            <p className="text-black">Username: <span className="opacity-40">Eva Sofia</span></p>
            <p className="text-black">Correo: <span className="opacity-40">evita@gmail.com</span></p>
            <p className="text-black">Estado: <span className="opacity-40">Activo</span></p>
            <p className="text-black">Rol: <span className="opacity-40">UX Design</span></p>
            <p className="text-black">Tax ID: <span className="opacity-40">Tax-9151</span></p>
            <p className="text-black">Contacto: <span className="opacity-40">(+51) 900151546</span></p>
            <p className="text-black">Lenguaje: <span className="opacity-40">Español</span></p>
            <p className="text-black">Nacionalidad: <span className="opacity-40">Peruano</span></p>
            <div className="flex justify-start gap-x-8 mt-4">
              <button className="btn btn-active btn-info text-white px-10">Edit</button>
              <button className="btn btn-outline btn-error">Suspended</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
