import React from "react";
import './App.scss';
import SideBar from "./components/side-bar";
import RoutingList from "./components/routing";
import Setting from "./components/setting/index";

function App() {
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


export default App;

