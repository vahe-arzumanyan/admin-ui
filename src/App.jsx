import React from "react";
import './App.scss';
import {Routes, Route} from "react-router-dom"
import SideBar from "./components/side-bar";
import Dashboard from "./components/side-bar/dishboard";
import UserProfile from "./components/side-bar/user-profile";
import TableList from "./components/side-bar/table-list";
import Icons from "./components/side-bar/icons";
import Maps from "./components/side-bar/maps";
import Notifications from "./components/side-bar/notifications";
import Typography from "./components/side-bar/typography";

function App() {
    return <div className='G-container-zero'>
        <div className='G-flex'>
            <SideBar/>
            <div className='P-routing-relative'>
                <Routes>
                    <Route path={"*"} element={<Dashboard/>}></Route>
                    <Route path={"Dashboard"} element={<Dashboard/>}></Route>
                    <Route path={"UserProfile"} element={<UserProfile/>}></Route>
                    <Route path={"TableList"} element={<TableList/>}></Route>
                    <Route path={"Typography"} element={<Typography/>}></Route>
                    <Route path={"Icons"} element={<Icons/>}></Route>
                    <Route path={"Maps"} element={<Maps/>}></Route>
                    <Route path={"Notifications"} element={<Notifications/>}></Route>
                </Routes>
            </div>
        </div>


    </div>
}


export default App;
