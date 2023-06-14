import React, {useEffect, useState} from 'react';
import './style.scss';
import NavLinkLists from "./nav-link";
import {useSelector} from "react-redux";
import {AdminNavBarList, privateRouters} from "../../routers/router";


const SideBar = () => {

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
        <div className='G-flex-column G-align-center P-nav-bar-list'>
            {AdminNavBarList.map(route => {
                return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
            })}
        </div>

    </div>

}
export default SideBar;

