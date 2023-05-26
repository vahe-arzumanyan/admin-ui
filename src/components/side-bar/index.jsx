import React from 'react';
import './style.scss';
import {useRoutingWareHouse} from "../routing/routing-warehouse";
import NavLinkLists from "./nav-link";


const SideBar = () => {

    const [route] = useRoutingWareHouse();

    return <div className='P-side-bar'>
        <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>

        <div className='P-side-bar-title G-flex-column  G-align-center'>
            {route.map(route => {
                return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
            })}
        </div>

    </div>

};

export default SideBar;

