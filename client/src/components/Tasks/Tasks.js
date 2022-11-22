import "./Task.css"
import React from 'react';
import Navbar from '../../app/components/Navbar/Navbar';
import Table from "./Table";

function Tasks() {
  return (
    <div className='w-screen Task-page flex-col'>
      <Navbar />
      <div className="flex m-4 tasks-container">
        <div className="drawer-task">
          <button className="btn btn-primary m-4 px-14">Agregar Tarea</button>
          <ul className="ml-2">
            <li><a className="text-lg text-gray-500 hover:text-primary">My Tasks</a></li>
            <li><a className="text-lg text-gray-500 hover:text-primary">Importante</a></li>
            <li><a className="text-lg text-gray-500 hover:text-primary">Completed</a></li>
          </ul>
          <br></br>
          <div className="flex justify-between">
            <p className="mx-4 mb-2">TAGS</p>
            <span className="mr-8">+</span>
          </div>
          <ul className="ml-2">
            <li className="text-lg text-gray-500 hover:text-primary">Team</li>
            <li className="text-lg text-gray-500 hover:text-primary">Low</li>
            <li className="text-lg text-gray-500 hover:text-primary">Medium</li>
            <li className="text-lg text-gray-500 hover:text-primary">High</li>
            <li className="text-lg text-gray-500 hover:text-primary">Update</li>
          </ul>
        </div>
        <div className="drawer-content flex-col">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>

          <Table />

        </div>
      </div>
    </div>

  );
}

export default Tasks;