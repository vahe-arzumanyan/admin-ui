import React from "react";
import './App.scss';
import SideBar from "./components/side-bar";
import RoutingHome from "./components/routing";

function App() {
    return <div className='G-container-zero'>
        <div className='G-flex'>
            <SideBar/>
            <div className='P-routing-relative'>
                <RoutingHome/>
            </div>
        </div>


    </div>
}


export default App;

// git rm -r --cached node_moduless
//hello