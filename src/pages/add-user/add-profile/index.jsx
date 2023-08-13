import React, {useEffect, useState} from 'react';
import './style.scss';
import {CONNECTION_API} from "../../../routers/router";
import UserInfo from "./print-user-info";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addUsersList} from "../../../store/reducers/user";
import FormUserProfile from "./form-user-profile";
import NavBar from "../../../components/nav-bar";
import CustomButton from "../../../components/custom-button";


const AddUserList = ({elementEdit, onCloseX, name}) => {

    const dispatch = useDispatch();

    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        city: '',
        profession: '',
        userBgImg: null,
        userImg: null
    })

    const [userInputError, setUserInputError] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorAge: '',
        errorEmail: '',
        errorCity: '',
        errorProfession: '',
        errorUserBgImg: '',
        errorUserImg: ''
    })

    /* axios request */

    const getUsersList = async () => {
        const result = await axios.get(`${CONNECTION_API}userInput`)
        if (result.data) {
            dispatch(addUsersList(result.data))
        }
    }

    useEffect(() => {
        if (elementEdit) {
            setUserInput(elementEdit)
        }
    }, [])

    // ===================== validation checking / start =====================

    const validation = () => {
        let validate = true;
        let errorText = {
            errorFirstName: '',
            errorLastName: '',
            errorAge: '',
            errorPhone: '',
            errorEmail: '',
            errorCity: '',
            errorProfession: '',
            errorUserBgImg: '',
            errorUserImg: ''
        }

        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!userInput.firstName.trim().length) {
            errorText.errorFirstName = 'fill in your first name'
            validate = false;
        }
        if (!userInput.lastName.trim().length) {
            errorText.errorLastName = 'fill in your last name'
            validate = false;
        }
        if (!userInput.age.trim().length) {
            errorText.errorAge = 'fill in your age'
            validate = false;
        }
        if (!userInput.email.trim().length) {
            errorText.errorEmail = 'fill in the required email'
            validate = false
        } else if (!validEmail.test(userInput.email)) {
            errorText.errorEmail = 'fill in email'
            validate = false
        }
        if (!userInput.city.trim().length) {
            errorText.errorCity = 'fill in the city'
            validate = false;
        }
        if (!userInput.profession.trim().length) {
            errorText.errorProfession = 'fill in the profession'
            validate = false;
        }
        if (!userInput.userBgImg) {
            errorText.errorUserBgImg = 'upload in the background image'
            validate = false
        }
        if (!userInput.userImg) {
            errorText.errorUserImg = 'upload in the image'
        }
        setUserInputError(errorText)
        return validate
    }

    // ===================== validation checking / end =====================
    const handleChange = (e) => {
        e.preventDefault()
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }


    const postUserInfo = async () => {
        const result = await axios.post(`${CONNECTION_API}userInput`, userInput)
        if (result.data) {
            await getUsersList()
            setUserInput({
                firstName: '',
                lastName: '',
                age: '',
                email: '',
                city: '',
                profession: '',
                userBgImg: null,
                userImg: null
            })
        }
    }

    // add user list / start

    // ===================== edit user list function / start =====================

    const updateProductServer = async (id) => {
        const body = userInput;
        delete body._id
        const result = await axios.put(`${CONNECTION_API}userInput/${id}`, body)
        if (result) {
            await getUsersList()
            onCloseX()
        }
    }

    // ===================== edit user list function / end =====================


    const handleAddUser = async () => {
        if (validation()) {
            if (elementEdit) {
                await updateProductServer(elementEdit._id)
            } else {
                await postUserInfo()
            }
        }
    }


    // ===================== upload image function / start =====================

    const chooseUserBgImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setUserInput({...userInput, userBgImg: reader.result})

        }
    }

    const chooseUserImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setUserInput({...userInput, userImg: reader.result})
        }
    }

    // ===================== upload image function / end =====================


    return <>
        {name === 'editUser' ? null : <NavBar name='User Profile'/>}

        <div className='P-user-parent'>

            {/* modal background color */}
            <div className={name === 'editUser' ? 'P-bg-edit-modal' : null}></div>

            {/* user content */}

            <div className={name === 'editUser' ? 'P-edit-user G-justify-center' : 'P-create-user G-justify-center'}>

                <div
                    className={name === 'editUSer' ? 'G-flex-column P-edit-user-content' : 'G-flex-column P-create-user-content'}>
                    <p className='P-create-profile-title'>Create Profile</p>
                    <FormUserProfile onChange={handleChange}
                                     userInput={userInput}
                                     userInputError={userInputError}
                    />

                    {/* choose image start */}

                    <div className='G-flex-column G-align-center P-upload-img-content'>
                        <div className='P-choose-img'>
                            <label>upload background image
                                <input onChange={chooseUserBgImg} type='file'/>
                            </label>
                            <p>{userInputError.errorUserBgImg}</p>

                        </div>

                        <div className='P-choose-user-img'>
                            <label>upload user image
                                <input onChange={chooseUserImg} type='file'/>
                            </label>
                            <p>{userInputError.errorUserImg}</p>
                        </div>
                    </div>

                    <div className={name === 'editUser' ? 'G-flex' : 'G-btn-add-user'}
                         style={{border: '1px solid magenta'}}>
                        <CustomButton onClick={handleAddUser}
                                      name={'Add User'}
                                      infoClassName={'addUser'}
                        />
                        {name === 'editUser' ? <CustomButton onCloseX={onCloseX}
                                                             name={'Close'}
                                                             infoClassName={'close'}
                        /> : null}
                    </div>

                </div>

                {/*  choose image end  */}


                {/* ================== user info content ================== */}

                {/*<div className='P-user-content'>*/}
                {/*    <UserInfo userInput={userInput}/>*/}
                {/*</div>*/}

            </div>
        </div>

    </>

};

export default AddUserList;