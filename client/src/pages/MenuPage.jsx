import Sidebar from "../components/Sidebar";
import NavPage from "../components/NavPage"

function MenuPage() {
    return (
        <div className="Menu-container">
            <div className="Menu">
                <div className="menu-main">
                <h4>RIZENI</h4>
                </div>
                <Sidebar />
            </div>
            <NavPage />
        </div>
    );
}

export default MenuPage;