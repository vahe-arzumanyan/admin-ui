import React, {useEffect} from 'react';
import './style.scss';
import {useDispatch} from "react-redux";
import {CONNECTION_API} from "../../../routers/router";
import axios from "axios";
import {addUsersList} from "../../../store/reducers/user";

const RemoveCustomModal = ({elementEdit, onClose}) => {
    const dispatch = useDispatch()


    const handleRemoveUserList = () => {
        deleteUserList()
        onClose()
    }


    const deleteUserList = async () => {
        await axios.delete(`${CONNECTION_API}userInput/${elementEdit._id}`)
        await getUsersList()
    }


    const getUsersList = async () => {
        const result = await axios.get(`${CONNECTION_API}userInput`)
        if (result.data) {
            dispatch(addUsersList(result.data))
        }
    }


    return <>
        <div className='P-delete-categories-modal G-center'>
            <div className='P-delete-modal-bgColor'></div>
            <div className='P-delete-ask G-center G-flex-column'>
                <p className='P-question-delete'>Are you sure you want to delete {elementEdit.firstName}<span>
            </span>
                </p>
                <div className='G-flex G-justify-between P-delete-yes-no'>
                    <button onClick={handleRemoveUserList}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    </>
};

export default RemoveCustomModal;