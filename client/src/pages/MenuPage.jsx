import Sidebar from "../components/Sidebar/Sidebar";
import NavPage from "../components/NavPage"
import "../styles/Menu.css"
import rizeni from "../images/logorizeni.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function MenuPage() {
    return (
        <div className="Menu-container">
            <div className="Menu" data-aos="fade-right">
                <div className="menu-main">
                <img alt="logorizeni" src={rizeni} className="logo-rizeni"></img>
                </div>
                <Sidebar />
            </div>
            <NavPage/>
        </div>
    );
}

export default MenuPage;