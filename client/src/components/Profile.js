import React from "react";
import "../styles/Profile.css"

function Profile() {
    return (
        <React.Fragment>
        <div className="Profile-content">
            <div className="profile-info">
                <p>Overview</p>
                <overview className="overview"></overview>
                <div className="dendem">
                    <density className="density"></density>
                    <demography className="demography"></demography>
                </div>
                <div className="active-users">
                </div>
            </div>
            <div className="profile"></div>
        </div>
        </React.Fragment>
     );
}

export default Profile;