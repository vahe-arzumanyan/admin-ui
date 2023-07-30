import React, {useEffect, useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import {CONNECTION_API} from "../../routers/router";
import axios from "axios";
import RotateLoading from "../../components/rotate-loading";
import UsersResult from "./users-result";

const UsersList = () => {

    const [usersList, setUsersList] = useState([])

    const getUsersList = async () => {
        const result = await axios.get(`${CONNECTION_API}userInput`)
        if (result.data) {
            console.log(result.data)
            setUsersList(result.data)
        }
    }

    useEffect(() => {
        getUsersList()
    }, [])

    return <>
        <NavBar name='Users list'/>
        <div className='P-user-list'>
            <div className='P-user-wrapper G-justify-between G-flex-wrap'>
                {usersList.length ? usersList.map((item, index) => {
                    return <UsersResult key={index}
                                        item={item}/>
                }) : <RotateLoading /> }
            </div>
        </div>
    </>
};

export default UsersList;