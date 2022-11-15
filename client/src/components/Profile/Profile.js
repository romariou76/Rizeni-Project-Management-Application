import React from "react";
import "./Profile.css"
import { BiTask } from "react-icons/bi";
import { useState, useEffect } from 'react';
function Profile() {


  // Retornando datos del proyecto
//   const [tasks, setTasks] = useState('');

//   const getData = () => {
//       return localStorage.getItem('prac-kanban');
//   }

//   useEffect(() => {
//       setTasks(getData());
//   }, []);

//   const filterTasks = () => {
//     return getData.filter(id => id > 1);
//   }
//   console.log(filterTasks);
//   console.log("------------------------");


    return (
        <div className="Profile-content bg-white-100">
            {/* <div className="profile-info">
                <p>Overview</p>
                <overview className="overview"></overview>
                <div className="dendem">
                    <density className="density"></density>
                    <demography className="demography"></demography>
                </div>
                <div className="active-users">
                </div>
            </div>
            <div className="profile"></div> */}
<div>
    <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-primary text-primary-content">
        <BiTask className="w-8 h-8 bg-secondaryy"/>
        <div>
            <h2 className="card-title">84%</h2>
            <h2 className="card-title">{filterTasks}</h2>
            <p>Completadas</p>
        </div>
    </div>
</div>
            

        </div>
    );
}

export default Profile;