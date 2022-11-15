import Avatar from "./Avatar.js";
import React from "react";
import "./Profile.css";
import Stat from "./Stat.js";
import NameUser from "./NameUser.js";
import Navbar from './Navbar';
import CardStat from "./CardStat.js";
import Chart from "./charts/Chart"
import AreaChart from "./charts/AreaChart";


function Profile(props) {
  return (
    <div className="Profile-col">
      <Navbar />
      <div className="Profile">
        <div className="profile-info">
          <p className="text-black font-bold text-lg">Overview</p>

          <overview className="overview pr-16 mt-2">
            <div className="flex justify-between">
              <CardStat />
            </div>
          </overview>
        <p className="text-black font-bold text-lg">Work density</p>
          <div className="dendem flex mt-2">
            <div className="density rounded-lg">
               <AreaChart />
            </div>
            <demography className="demography rounded-lg">
               <Chart />
            </demography>
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
