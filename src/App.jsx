import React from "react";
import './App.scss';
import SideBar from "./components/side-bar";
import RoutingHome from "./components/routing";
import Setting from "./components/setting";

function App() {
    return <div className='G-container-zero'>
        <div className='G-flex'>
            <SideBar/>
            <div className='P-routing-relative'>
                <RoutingHome/>
                <div style={{width:'1005', height:'100%'}} className='G-justify-end'>
                    {/*<Setting/>*/}
                </div>

            </div>
        </div>


    </div>
}


export default App;

// git rm -r --cached node_moduless
//hello