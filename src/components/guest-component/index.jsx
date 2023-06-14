import {publicRouters, RouterNames} from "../../routers/router";
import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";

const GuestComponent = () => {

    return <div className='P-guest-pages'>
        <Routes>
            {publicRouters.map(route => {
                return <Route path={route.path} element={route.element}
                />
            })}
            <Route path={'*'} element={<Navigate to={RouterNames.LOGIN}/>}/>
        </Routes>
    </div>
}
export default GuestComponent