import avatar from "../svg/user.svg"

function DashboardPage() {
    return ( 
        <div className="dashboard-content">
            <div className="title-area">
                <p>Dashboard</p>
                <img className="avatar" src={avatar}></img>
            </div>
            <div className="participation">
                <div className="participation-content">Participacion</div>
                <div className="participation-details">
                    <div className="participation-item"></div>
                    <div className="participation-item"></div>
                    <div className="participation-item"></div>
                    <div className="participation-item"></div>
                </div>
            </div>
            <div className="work-MG-content">Work Management</div>
        </div>
     );
}

export default DashboardPage;