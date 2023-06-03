import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRouters} from "../../routers/router";


const RoutingHome = () => {
    return <Routes>
        {privateRouters.map(route => {
            return <Route path={route.path} element={route.element}/>
        })}
    </Routes>
};

export default RoutingHome;
