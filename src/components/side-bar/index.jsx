import React, {useMemo} from 'react';
import './style.scss';
import {useRoutingWareHouse} from "../routing/routing-warehouse";
import NavLinkLists from "./nav-link";
import {useSelector} from "react-redux";
import defaultImg from '../../assets/image/pluginImg (1).jpg'

const SideBar = () => {

    const [route] = useRoutingWareHouse();
    const createImg = useSelector(state => state.PluginStyle.img)
    const changeColor = useSelector(state => state.PluginStyle.color)

    const bkImage = useMemo(() => {
        if (createImg === null) {
            return defaultImg
        }
        if (createImg.img) {
            return createImg.img
        }
        if (!createImg.img) {
            return ''
        }
    }, [createImg])


    return <div className='P-side-bar' style={{backgroundColor: !changeColor ? "#9368e9" : changeColor}}>

            {/*<div style={{backgroundImage: `url(${bkImage})`}} className='G-image-cover P-side-bar-bkImg'> </div>*/}
            <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>


            <div className='G-flex-column G-align-center' style={{marginTop: '50px'}}>
                {route.map(route => {
                    return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
                })}
            </div>

        </div>

}
export default SideBar;

