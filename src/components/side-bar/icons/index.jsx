import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../nav-bar";
import IconList from "./icon-list";

const Icons = () => {

    const [icon, setIcon] = useState([
        {
            icon1: 'icon-delta-icons',
            icon2: 'icon-delta-icons',
            icon3: 'icon-delta-icons',
            icon4: 'icon-delta-icons',
            icon5: 'icon-delta-icons',
            icon6: 'icon-delta-icons',
            icon7: 'icon-delta-icons',
            icon8: 'icon-delta-icons',
            icon9: 'icon-delta-icons',
            icon10: 'icon-delta-icons',
            icon11: 'icon-delta-icons',
            icon12: 'icon-delta-icons',
            icon13: 'icon-delta-icons',
            icon14: 'icon-delta-icons',
            icon15: 'icon-delta-icons'
        }
    ])


    return <>
        <NavBar name='Icons'/>
        <div className='P-icon-content G-justify-center'>
           <div className='P-icon-content-child'>
               <div className='P-icon-title G-flex-column'>
                   <p>100 Awesome Nucleo Icons</p>
                   <p>Handcrafted by our friends from NucleoApp</p>
               </div>
                   {icon.length ? icon.map((item, index) => {
                       return <IconList item={item} key={index}/>
                   }) : null}
           </div>

        </div>
    </>

};

export default Icons;