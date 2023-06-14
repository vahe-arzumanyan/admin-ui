import SideBar from "../side-bar";
import RoutingList from "../routing";
import Setting from "../setting";
import React from "react";

const AdminComponent = ()=>{

    return <div className='G-container-zero'>
        <div className='G-flex'>
            <SideBar/>
            <div className='P-routing-relative'>
                <RoutingList/>
                <div className='G-justify-end P-'>
                    <Setting/>
                </div>
            </div>
        </div>
    </div>
}

export  default AdminComponent