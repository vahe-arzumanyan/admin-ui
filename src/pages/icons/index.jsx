import React, {useState} from 'react';
import './style.scss';
import IconList from "./icon-list";
import NavBar from "../../components/nav-bar";

const Icons = () => {

    const [icon, setIcon] = useState([
        {
            icon1: 'icon-delta-icons'
        }
    ])


    return <>
        <NavBar name='Icons'/>
        <div className='P-icon-content G-justify-center'>
           <div className='P-icon-content-child'>
               <div className='P-icon-title G-flex-column'>
                   <p>100 Awesome Nucleo Icons</p>
                   <p>Handcrafted by our friends from <span style={{color:'#007bff'}}>Nucleo</span></p>
               </div>
                   {icon.length ? icon.map((item, index) => {
                       return <IconList item={item} key={index}/>
                   }) : null}
           </div>

        </div>
    </>

};

export default Icons;