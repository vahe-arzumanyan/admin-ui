import React from 'react';
import './style.scss';
import {useRoutingWareHouse} from "../routing/routing-warehouse";
import NavLinkLists from "./nav-link";
import {useSelector} from "react-redux";
import testImg from '../../assets/image/images.jpg'
// import { useSetting} from "../setting/useSetting/index";

const SideBar = () => {

    const [route] = useRoutingWareHouse();
    const changeColor = useSelector(state => state.PluginStyle.color)
    const createImg = useSelector(state => state.PluginStyle.img)

    return <div className='P-side-bar' style={{backgroundColor: !changeColor ? "#9368e9" : changeColor}}>

        {/*<div style={{backgroundImage: `url("${testImg}")`}} className='G-image-cover P-i'></div>*/}

        <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>

        <div className='G-flex-column G-align-center' style={{top: '-80px'}}>
            {route.map(route => {
                return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
            })}
        </div>

    </div>
}
    export default SideBar;

