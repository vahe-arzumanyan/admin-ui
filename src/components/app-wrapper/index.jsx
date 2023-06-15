import React, {useEffect, useState} from "react";
import AdminComponent from "../admin-component";
import GuestComponent from "../guest-component";
import {useSelector} from "react-redux";

const AppWrapper = () => {
    // const [token, setToken] = useState('')
    //
    // useEffect(()=>{
    //    const tokenData = localStorage.getItem('token')
    //     setToken(tokenData)
    // },[])

    const userToken = useSelector(state => state.Authorization.userToken)
    const [token, setToken] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('userToken')
        setToken(localToken)
    }, [])

    return token ? <AdminComponent/> : <GuestComponent/>

}

export default AppWrapper



