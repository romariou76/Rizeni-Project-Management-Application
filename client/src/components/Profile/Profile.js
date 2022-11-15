import Avatar from "./Avatar.js";
import React from "react";
import "./Profile.css";
import { BiTask } from "react-icons/bi";
import Stat from "./Stat.js";
import NameUser from "./NameUser.js";
import Navbar from './Navbar';

function Profile() {
  return (
    <div className="Profile-col">
      <Navbar />
      <div className="Profile">
        <div className="profile-info">
          <p>Overview</p>

          <overview className="overview pr-16">
            <div className="flex justify-between">

              <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-yellow-400 text-primary-content">
                <BiTask className="w-8 h-8" />
                <div>
                  <h2 className="card-title">84%</h2>
                  <p>Completadas</p>
                </div>
              </div>
              <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-purple-700 text-primary-content">
                <BiTask className="w-8 h-8" />
                <div>
                  <h2 className="card-title">84%</h2>
                  <p>Completadas</p>
                </div>
              </div>
              <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-red-400 text-primary-content">
                <BiTask className="w-8 h-8" />
                <div>
                  <h2 className="card-title">84%</h2>
                  <p>Completadas</p>
                </div>
              </div>
              <div className="flex-row card rounded-lg w-48 items-center p-4 gap-6 bg-green-500 text-primary-content">
                <BiTask className="w-8 h-8" />
                <div>
                  <h2 className="card-title">84%</h2>
                  <p>Completadas</p>
                </div>
              </div>
            </div>

          </overview>

          <div className="dendem">
            <density className="density"></density>
            <demography className="demography"></demography>
          </div>

          {/* <div className="active-users"></div> */}
        </div>

        <div className="profile">
          <div className="flex justify-center content-center py-4">
            <Avatar />
          </div>
          <NameUser />
          <Stat />
        </div>
      </div>
    </div>
  );
}

export default Profile;
