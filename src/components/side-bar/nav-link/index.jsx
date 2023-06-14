import React from 'react';
import {NavLink} from "react-router-dom";
import './style.scss';


const NavLinkLists = ({path, icon, title}) => {

    return <>
        <div className='P-side-bar-title'>
            <ul className='G-align-center'>
                <li>
                    <NavLink to={path} className='G-flex'>
                        <span className={`G-icon-svg ${icon}`}></span>
                        <p >{title}</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    </>

};

export default NavLinkLists;
