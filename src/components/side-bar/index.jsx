import React, {useMemo} from 'react';
import './style.scss';
import {useRoutingWareHouse} from "../routing/routing-warehouse";
import NavLinkLists from "./nav-link";
import {useSelector} from "react-redux";
import defaultImg from '../../assets/image/images.jpg'

const SideBar = () => {

    const [route] = useRoutingWareHouse();
    const changeColor = useSelector(state => state.PluginStyle.color)
    const createImg = useSelector(state => state.PluginStyle.img)
    console.log(createImg, "sa e")

const bkImage = useMemo(()=>{
    if(createImg === null){
        return defaultImg
    }
    if(!createImg.img){
        return createImg.img
    }
    if(!createImg.img){
        return ''
    }
}, [createImg])




    return <div className='P-side-bar' style={{backgroundColor: !changeColor ? "#9368e9" : changeColor}}>



        <h1 className='P-side-bar-logo'>CREATIVE TIM</h1>

        {/*<div style={{backgroundImage: `url(${bkImage})`}} className='G-image-cover P-side-bar-bkImg'>SAD</div>*/}

        <div className='G-flex-column G-align-center' style={{marginTop: '100px'}}>
            {route.map(route => {
                return <NavLinkLists path={route.path} icon={route.icon} title={route.title}/>
            })}
        </div>

    </div>
}
export default SideBar;

