import React, {useEffect, useState} from 'react';
import './style.scss';
import CustomInput from "../../custom-input";
import {useDispatch, useSelector} from "react-redux";
import {checkToken, checkUsers} from "../../../store/reducers/authorization";


const LoginForm = ({registerLoginModal}) => {

    const authorizationUser = useSelector(state=> state.Authorization.authorizationUser)
    const dispatch = useDispatch()

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    const [loginUserErrorText, setLoginUserErrorText] = useState({
        errorEmail: '',
        errorPassword: ''
    })


    const handleChange = (e) => {
        e.preventDefault()
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
        setLoginUserErrorText({...loginUserErrorText, [e.target.name]: ''})
    }

    useEffect(()=>{
        dispatch(checkUsers())
    }, []);




    // ==================== error text ====================


    const validation = () => {
        let isValidation = true;
        const errorString = {
            errorEmail: '',
            errorPassword: ''
        }

        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!loginUser.password.trim().length) {
            errorString.errorPassword = "fill in the required password"
            isValidation = false;
        }

        if (!loginUser.email.trim().length) {
            errorString.errorPassword = "fill in the required email"
            isValidation = false

        }if (!validEmail.test(loginUser.email)) {
            errorString.errorEmail = "fill in email"
            isValidation = false
        }

        setLoginUserErrorText(errorString)
        return isValidation;
    }

    // ==================== onClick ===================

    const handleClick = () => {
        if(validation()){
            if(authorizationUser.length){
                authorizationUser.forEach((item, index)=>{
                    if(item.email === loginUser.email && item.password === loginUser.password){
                        dispatch(checkToken(loginUser.email + loginUser.password))
                        localStorage.setItem("userToken", (loginUser.email + loginUser.password).toString())
                        window.location.reload()
                    }
                })
            }
            setLoginUser({
                ...loginUser,
                email: '',
                password: ''
            })
        }
    }


    return <div className={`P-login-form ${registerLoginModal ? "P-login-hide" : ''}`}>

        <div className='G-flex-column G-align-center G-login-register-input'>

            <CustomInput
                onChange={handleChange}
                name='email'
                type='text'
                value={loginUser.email}
                errorText={loginUserErrorText.errorEmail}
            />

            <CustomInput
                onChange={handleChange}
                name='password'
                type='password'
                value={loginUser.password}
                errorText={loginUserErrorText.errorPassword}
            />
            <div className='P-custom-button'>
                <button onClick={handleClick}>finish</button>
            </div>
        </div>
    </div>

};

export default LoginForm;