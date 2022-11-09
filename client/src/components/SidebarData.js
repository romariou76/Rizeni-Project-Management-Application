import "../styles/Menu.css";

import { MdDashboardCustomize } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { MdTask } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { FaUsers, FaUser } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";

export const SidebarData=[
    
    {
        title: "Perfil",
        path: "/menu/profile",
        icon: <FaUser />
    },

    {
        title: "Dashboard",
        path: "/menu/dashboard",
        icon: <MdDashboardCustomize />
    },

    {
        title: "Roadmap",
        path: "/menu/profile",
        icon: <BiMessageDetail />
    },

    {
        title: "Tareas",
        path: "/menu/workflow",
        icon: <MdTask />
    },

    {
        title: "Reportes",
        path: "/menu/analisis",
        icon: <SiGoogleanalytics />
    },

    {
        title: "Estimation",
        path: "/profile",
        icon: <VscCalendar />
    },

    {
        title: "Calendario",
        path: "/profile",
        icon: <VscCalendar />
    },

    {
        title: "Colaboradores",
        path: "/menu/collaborators",
        icon: <FaUsers />
    },

    {
        title: "Salir",
        path: "/home",
        icon: <IoLogOut />
    },
]