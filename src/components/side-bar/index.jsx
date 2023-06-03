import React, {useEffect, useState} from 'react';
import './style.scss';
import {useRoutingWareHouse} from "../routing/routing_list";
import NavLinkLists from "./nav-link";
import {useSelector} from "react-redux";


const SideBar = () => {

    const [route] = useRoutingWareHouse();
    const createImg = useSelector(state => state.PluginStyle.img)
    const changeColor = useSelector(state => state.PluginStyle.color)
    const isImage = useSelector(state => state.PluginStyle.isImage)

    const [bgImage, setBgImage] = useState('')

    useEffect(() => {
        if (createImg) {
            setBgImage(createImg.img)
        }
    }, [createImg])


    return <div className={`P-side-bar ${bgImage && isImage ? 'P-bg-color' : ''} `} style={{
        backgroundColor: !changeColor ? "#9368e9" : changeColor,
        backgroundImage: `url('${bgImage && isImage ? bgImage : ""}')`
    }}>
        <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>
        <div className='G-flex-column G-align-center P-nav-bar-list' style={{marginTop: '50px'}}>
            {route.map(route => {
                return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
            })}
        </div>

    </div>

}
export default SideBar;

