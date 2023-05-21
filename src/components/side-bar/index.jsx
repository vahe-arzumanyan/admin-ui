import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return <div className='P-side-bar'>

        <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>

        <div className='P-side-bar-title G-flex-column  G-align-center'>
            <ul className='G-flex-column G-align-start'>
                <li>
                    <NavLink to={'/Dashboard'}>
                        <span className='icon-pie-chart G-icon-svg'></span>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={'/UserProfile'}>
                        <span className='icon-user-circle G-icon-svg'></span>User Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/TableList'}>
                        <span className='icon-paper-clip G-icon-svg'></span>Table List</NavLink>
                </li>
                <li>
                    <NavLink to={'/Typography'}>
                        <span className='icon-lowercase G-icon-svg'></span>Typography</NavLink>
                </li>
                <li>
                    <NavLink to={'/Icons'}>
                        <span className='icon-delta-icons G-icon-svg'></span>Icons</NavLink>
                </li>
                <li>
                    <NavLink to={'/Maps'}>
                        <span className='icon-map G-icon-svg'></span>Maps</NavLink>
                </li>
                <li>
                    <NavLink to={'/Notifications'}>
                        <span className='icon-notification-bell G-icon-svg'></span>Notifications</NavLink>
                </li>
            </ul>
        </div>

    </div>

};

export default SideBar;