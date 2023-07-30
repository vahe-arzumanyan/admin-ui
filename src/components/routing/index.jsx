import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRouters, RouterNames} from "../../routers/router";


const RoutingList = () => {
    return <Routes>
        {privateRouters.map(route => {
            return <Route path={route.path} element={route.element}/>
        })}
        <Route path={'/*'} element={<Navigate to={RouterNames.DASHBOARD}/>}/>
    </Routes>
};

export default RoutingList;
