import React, {useState} from 'react';
import './style.scss';
import CustomInput from "../../custom-input";
import CustomButton from "../../custom-button";


const LoginForm = ({registerLoginModal}) => {

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    const [loginUserErrorText, setLoginUserErrorText] = useState({
        emailErrorText: '',
        passwordErrorText: ''
    })


    const handleChange = (e) => {
        e.preventDefault()
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
        setLoginUserErrorText({...loginUserErrorText, [e.target.name]: ''})
    }

    const handleClick = () => {
        alert('asd')
    }

    // ==================== error text ====================


    const validation = () => {

        let isValidate = true;
        const errorString = {
            errorEmail: '',
            errorPassword: ''
        }

        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!loginUser.email.trim().length) {
            errorString.errorEmail = 'fill in the required password';
            isValidate = false;
        }
        if (!loginUser.password.trim().length) {
            errorString.passwordErrorText = 'fill in the required password';
            isValidate = false;
        }
        if (!validEmail.test(loginUser.email)) {
            errorString.errorEmail = 'fill in email';
            isValidate = false;
        }

        setLoginUserErrorText(errorString)
        return isValidate;
    }


    return <div className={`P-login-form ${registerLoginModal ? "P-login-hide" : ''}`}>

        <div className='G-flex-column G-align-center'>

            <CustomInput
                onChange={handleChange}
                name='email'
                type='text'
                value={loginUser.email}
                errorText={loginUserErrorText.emailErrorText}
            />

            <CustomInput
                onChange={handleChange}
                name='password'
                type='password'
                value={loginUser.password}
                errorText={loginUserErrorText.passwordErrorText}
            />
            <CustomButton onClick={handleClick}/>
        </div>
    </div>

};

export default LoginForm;