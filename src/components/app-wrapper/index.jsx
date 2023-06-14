import React, {useEffect, useState} from "react";
import AdminComponent from "../admin-component";
import GuestComponent from "../guest-component";

const AppWrapper = () => {
    const [token, setToken] = useState('')

    useEffect(()=>{
       const tokenData = localStorage.getItem('token')
        setToken(tokenData)
    },[])
    return token ? <AdminComponent/> : <GuestComponent/>

}

export default AppWrapper