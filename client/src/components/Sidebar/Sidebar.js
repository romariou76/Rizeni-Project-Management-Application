import React from 'react';
import { SidebarData } from './SidebarData';
import "./Sidebar.css"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
                <div className='sidebarcolor'>
                    {
                        SidebarData.map((item, index) =>{
                            return(
                                <div key={index}>
                                    <NavLink className='sidebarlink' to={item.path}>
                                        <span className=''>{item.icon}</span>
                                        <p className='title-link'>{item.title}</p>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
     );
}
 
export default Sidebar;