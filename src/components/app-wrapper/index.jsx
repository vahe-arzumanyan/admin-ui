import React, {useEffect, useState} from "react";
import AdminComponent from "../admin-component";
import GuestComponent from "../guest-component";
import {useSelector} from "react-redux";
import RotateLoading from "../rotate-loading";

const AppWrapper = () => {

    const userToken = useSelector(state => state.Authorization.userToken)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('userToken')
        setToken(localToken)
        setLoading(false)
    }, [])

    if(loading){
        return <RotateLoading/>
    }

    return token  ? <AdminComponent/> : <GuestComponent/>

}

export default AppWrapper



