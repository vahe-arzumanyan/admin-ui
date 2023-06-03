import React from 'react';
import './style.scss';
import NavBar from "../../../nav-bar";
import defaultImg from "../../../../assets/image/pluginImg (1).jpg";


const Dashboard = () => {

    return <div className='P-dashboard'>
        <NavBar name='Dashboard'/>
{/*<div className="wrapper">*/}
{/*    <div className="wrp-inner"></div>*/}
{/*    <div className="wrp-inner"></div>*/}
{/*</div>*/}
        <div style={{backgroundImage: `url(${defaultImg})`}} className='aaa '> </div>


    </div>

};

export default Dashboard;