import React, {useState} from 'react';
import Dashboard from "../../side-bar/nav-link/dishboard";
import UserProfile from "../../side-bar/nav-link/user-profile";
import TableList from "../../side-bar/nav-link/table-list";
import Typography from "../../side-bar/nav-link/typography";
import Icons from "../../side-bar/nav-link/icons";
import Maps from "../../side-bar/nav-link/maps";
import Notifications from "../../side-bar/nav-link/notifications";

 export const useRoutingWareHouse = () => {

    const route = [
        {path: '/Dashboard', element: <Dashboard/>, icon: 'icon-pie-chart', title:'Dashboard'},
        {path: '/UserProfile', element: <UserProfile/>, icon: 'icon-user-circle', title:'User Profile'},
        {path: '/TableList', element: <TableList/>, icon: 'icon-paper-clip', title:'Table List'},
        {path: '/Typography', element: <Typography/>, icon: 'icon-lowercase', title:'Typography'},
        {path: '/Icons', element: <Icons/>, icon: 'icon-delta-icons', title:'Icons'},
        {path: '/Maps', element: <Maps/>, icon: 'icon-map', title:'Maps'},
        {path: '/Notifications', element: <Notifications/>, icon: 'icon-notification-bell', title:'Notifications'}

    ]
    return [route]
};
