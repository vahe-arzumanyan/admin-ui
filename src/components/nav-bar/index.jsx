import React from 'react';
import './style.scss';


const NavBar = ({name}) => {
    return (
        <div className='P-nav-bar G-align-center'>
            <p style={{margin:'0 15px'}}>{name}</p>
        </div>
    );
};

export default NavBar;