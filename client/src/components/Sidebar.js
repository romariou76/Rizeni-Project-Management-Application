import React from 'react';
import { SidebarData } from './SidebarData';
import "../styles/Sidebar.css"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <React.Fragment>
            <section>
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
            </section>
        </React.Fragment>
     );
}
 
export default Sidebar;