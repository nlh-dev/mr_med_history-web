import { Link, Outlet } from 'react-router-dom'
import { SidebarMenu } from './Sidebar.data.ts'
import ssmrlogo from '../assets/ssmr-2.png'
import './Siddebar.css'

export const Sidebar = () => {

    return (
        <div className="display-sidebar">
            <div className="sidebar">
                <div className="logo_details">
                    <img className='ssmrlogo-1' src={ssmrlogo} />
                    <div className='ssmr_name'>
                        <p>Historias Médicas</p>
                    </div>
                </div>
                <hr />
                <ul className="nav_list" >
                    <div className='content'>
                        {SidebarMenu && SidebarMenu.map((menu, index) => (
                            <li key={index}>
                                {menu.type == 'link' && (<Link to={menu.redirecTo}>
                                    <i className={menu.icon} />
                                    <span className='link_name'>{menu.title}</span>
                                </Link>)}
                                {menu.type == 'divider' && (<hr />)}
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
            <div className="showOulet">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

