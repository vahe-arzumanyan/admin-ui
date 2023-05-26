import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useRoutingWareHouse} from '../routing/routing-warehouse/index'


const RoutingHome = () => {
const [route] = useRoutingWareHouse();

    return <>
        <Routes>
            {route.map(route => {
                return <Route path={route.path} element={route.element}/>
            })}
        </Routes>
    </>

};

export default RoutingHome;

// <Route path={"/*"} element={<Dashboard/>}/>
// {routes.map(route => (
//     <Route path={route.path} element={route.components}/>
// ))}