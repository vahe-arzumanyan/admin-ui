import React, {useState} from 'react';
import './style.scss';
import LoginRegister from "../login";
import {NavLink} from "react-router-dom";
import {privateRouters, RouterNames} from "../../routers/router";
import Logout from "../logout";
import CustomModal from "../custom-modal";


const NavBar = ({name, children}) => {

    // const [route] = useRoutingWareHouse();

    const [logoutModal, setLogoutModal] = useState(false)

    const handleLogout = () => {
        setLogoutModal(!logoutModal)
    }

    const logoutUser = () => {
        let userToken = localStorage.getItem('userToken')
        if (userToken) {
            userToken = ''
            localStorage.setItem('userToken', userToken)
            window.location.reload();
        }
    }

    return (
        <div className='G-align-center G-justify-between P-nav-bar'>
            <p>{name}</p>
            <div>

                {/*<NavLink to={RouterNames.LOGOUT}>Logout</NavLink>*/}

                {/* ================== logout ================== */}
                {children}
                <button onClick={handleLogout} style={{margin:'0 15px'}}>Logout
                    {logoutModal ? <CustomModal onClose={handleLogout}>
                        <Logout onClose={handleLogout} logoutUser={logoutUser}/>
                    </CustomModal> : null}
                </button>

            </div>
        </div>
    );
};

export default NavBar;