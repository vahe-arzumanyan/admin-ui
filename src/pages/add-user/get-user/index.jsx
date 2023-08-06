import React, {useEffect, useState} from 'react';
import './style.scss';
import {CONNECTION_API} from "../../../routers/router";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addUsersList} from "../../../store/reducers/user";
import RotateLoading from "../../../components/rotate-loading";
import NavBar from "../../../components/nav-bar";
import ResultUsersList from "./users-result";


const GetUsersList = () => {

    const usersList = useSelector(state => state.UsersList.usersList)
    const dispatch = useDispatch()

    const getUsersList = async () => {
        const result = await axios.get(`${CONNECTION_API}userInput`)
        if (result.data) {
            dispatch(addUsersList(result.data))
        }
    }

    useEffect(() => {
        getUsersList()
    }, [])

    return <>
        <NavBar name='Users list'/>
        <div className='P-user-list'>
            <div className='P-user-wrapper G-flex-wrap G-justify-around'>
                {usersList.length ? usersList.map((elementEdit, index) => {
                    return <ResultUsersList key={index}
                                         elementEdit={elementEdit}
                                         name={'editUser'}/>
                }) : <RotateLoading/>}

            </div>
        </div>
    </>
};

export default GetUsersList;