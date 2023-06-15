import React, {useState, useEffect} from 'react';
import './style.scss';
import CustomInput from "../../custom-input";
import {createUsers} from "../../../store/reducers/authorization";
import {useDispatch, useSelector} from "react-redux";

const RegisterForm = ({registerLoginModal}) => {

    const dispatch = useDispatch();
    const authorizationUser = useSelector(state => state.Authorization.authorizationUser)


    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [registerUserErrorText, setRegisterUserErrorText] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: ''
    })

    const handleChange = (e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value})
        setRegisterUserErrorText({...registerUserErrorText, [e.target.name]: ''})
    }

    // ==================== validation ====================

    const validation = () => {
        let isValidate = true
        let errorString = {
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirmPassword: ''
        }

        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!registerUser.firstName.trim().length) {
            errorString.errorFirstName = 'fill in the required first first name'
            isValidate = false
        }
        if (!registerUser.lastName.trim().length) {
            errorString.errorLastName = 'fill in the required last name'
            isValidate = false
        }
        if (!registerUser.email.trim().length) {
            errorString.errorEmail = 'fill in the required email'
            isValidate = false
        } else if (!validEmail.test(registerUser.email)) {
            errorString.errorEmail = 'fill in email'
            isValidate = false
        }


        if (!registerUser.password.trim().length) {
            errorString.errorPassword = 'fill in the required email'
            isValidate = false
        } else if (registerUser.password.trim().length && registerUser.password.trim().length < 8) {
            errorString.errorPassword = 'should not be less 8'
            isValidate = false
        }

        if (!registerUser.confirmPassword.trim().length) {
            errorString.errorConfirmPassword = 'fill in the required confirm password'
            isValidate = false
        } else if (registerUser.confirmPassword.trim().length && registerUser.confirmPassword.trim().length !== registerUser.password.length) {
            errorString.errorConfirmPassword = 'do not correspond to each other confirm password and password'
            isValidate = false
        }

        setRegisterUserErrorText(errorString)
        return isValidate;
    }

    useEffect(() => {
        if (authorizationUser.length) {
            localStorage.setItem('authorizationUser', JSON.stringify(authorizationUser))
        }
    }, [authorizationUser])


    const handleClick = () => {
        if (validation(registerUser)) {
            dispatch(createUsers(registerUser))
            setRegisterUser({
                ...registerUser,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }


    return <div className={`P-register-form ${registerLoginModal ? " P-register-form-hide" : ''} `}>
        <div className='G-flex-column G-align-center'>
            <CustomInput
                onChange={handleChange}
                type='text'
                name='firstName'
                value={registerUser.firstName}
                errorText={registerUserErrorText.errorFirstName}
            />

            <CustomInput
                onChange={handleChange}
                type='text'
                name='lastName'
                value={registerUser.lastName}
                errorText={registerUserErrorText.errorLastName}
            />

            <CustomInput
                onChange={handleChange}
                type='text'
                name='email'
                value={registerUser.email}
                errorText={registerUserErrorText.errorEmail}
            />

            <CustomInput
                onChange={handleChange}
                type='password'
                name='password'
                value={registerUser.password}
                errorText={registerUserErrorText.errorPassword}
            />

            <CustomInput
                onChange={handleChange}
                type='password'
                name='confirmPassword'
                value={registerUser.confirmPassword}
                errorText={registerUserErrorText.errorConfirmPassword}
            />

            <div className='P-custom-button'>
                <button onClick={handleClick}>finish</button>
            </div>
        </div>
    </div>

}


export default RegisterForm;