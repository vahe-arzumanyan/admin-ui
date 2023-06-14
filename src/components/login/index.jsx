import React, {useState} from 'react';
import './style.scss';
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const LoginRegister = () => {

    const [registerLoginModal, setRegisterLoginModal] = useState(false)
    const handleLoginRegisterClick = () => {
        setRegisterLoginModal(!registerLoginModal)

    }
    return <div className='P-loginRegister-wrapper G-center'>

        <div className='P-loginRegister-content G-flex-column'>
            <button onClick={handleLoginRegisterClick}>
                <div className='P-login-register-title G-flex-column G-align-center'>
                    <p>{registerLoginModal ? "Login" : "Register"}</p>
                    <div className='P-login-register-title-border'></div>
                </div>
            </button>
            <div style={{marginTop: '30px'}}>
                <LoginForm registerLoginModal={registerLoginModal}/>
                <RegisterForm registerLoginModal={registerLoginModal}/>
            </div>
        </div>
    </div>
};

export default LoginRegister;