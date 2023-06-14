import React from 'react';
import './style.scss';
import LoginRegister from "../login";
import {NavLink} from "react-router-dom";
import {privateRouters, RouterNames} from "../../routers/router";


const NavBar = ({name, useRoutingWareHouse}) => {

    // const [route] = useRoutingWareHouse();
    return (
        <div className='G-align-center G-justify-between P-nav-bar'>
            <p>{name}</p>
           <div className='P-nav-bar'>

               <NavLink to={RouterNames.LOGIN}>Log in</NavLink>
           </div>
        </div>
    );
};

export default NavBar;