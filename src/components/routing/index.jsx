import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../side-bar/dishboard";
import UserProfile from "../side-bar/user-profile";
import TableList from "../side-bar/table-list";
import Typography from "../side-bar/typography";
import Icons from "../side-bar/icons";
import Maps from "../side-bar/maps";
import Notifications from "../side-bar/notifications";

const RoutingHome = () => {
    return <>
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
    </>

};

export default RoutingHome;