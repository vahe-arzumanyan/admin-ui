import React, {useState} from 'react';
import './style.scss';
import CustomInput from "../../custom-input";
import CustomButton from "../../custom-button";


const RegisterForm = ({registerLoginModal}) => {

    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [registerUserErrorText, setRegisterUserErrorText] = useState({
        firstNameErrorText: '',
        lastNameErrorText: '',
        emailRegisterUserErrorText: '',
        passwordRegisterUserErrorText: '',
        confirmPasswordErrorText: ''
    })

    const handleChange = (e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value})
        setRegisterUserErrorText({...registerUserErrorText, [e.target.name]: ''})
    }

    const handleClick = () => {
        alert('asd')
    }

    return <div className={`P-register-form ${registerLoginModal ? " P-register-form-hide" : ''} `}>
        <div className='G-flex-column G-align-center'>
            <CustomInput
                onChange={handleChange}
                type='text'
                name='firstName'
                value={registerUser.firstName}
                errorText={registerUserErrorText.firstNameErrorText}
            />

            <CustomInput
                onChange={handleChange}
                type='text'
                name='lastName'
                value={registerUser.lastName}
                errorText={registerUserErrorText.lastNameErrorText}
            />

            <CustomInput
                onChange={handleChange}
                type='text'
                name='email'
                value={registerUser.email}
                errorText={registerUserErrorText.emailRegisterUserErrorText}
            />

            <CustomInput
                onChange={handleChange}
                type='password'
                name='password'
                value={registerUser.password}
                errorText={registerUserErrorText.passwordRegisterUserErrorText}
            />

            <CustomInput
                onChange={handleChange}
                type='password'
                name='confirmPassword'
                value={registerUser.confirmPassword}
                errorText={registerUserErrorText.confirmPasswordErrorText}
            />
            <CustomButton onClick={handleClick}/>
        </div>
    </div>

};

export default RegisterForm;