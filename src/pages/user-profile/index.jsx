import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import UserInfo from "./user_info";
import profileBackgroundImage from '../../assets/image/profileBackgroundImage.jpg';
import profileUserImage from '../../assets/image/profileUserImage.jpg';
import FormUserProfile from "./form-user-profile";
import CustomButton from "../../components/custom-button";


const UserProfile = () => {

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        age: Number,
        phone: '',
        email: '',
        city: '',
        profession: '',
        userBgImg: null,
        userImg: null
    })

    const [inputError, setInputError] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorAge: Number,
        errorPhone: '',
        errorEmail: '',
        errorCity: '',
        errorProfession: '',
        errorUserBgImg: '',
        errorUserImg: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleUpdateProfile = () => {
        alert('Update Profile')
    }

    // choose img function

    const chooseUserBgImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setInput({...input, userBgImg: reader.result})

        }
    }

    const chooseUserImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setInput({...input, userImg: reader.result})
        }
    }

    return <>
        <NavBar name='User Profile'/>

        <div className='P-create-user'>

            <div className='P-user-profile G-flex'>

                <div className='G-flex-column P-create-user-content'>
                    <p className='P-create-profile-title'>Create Profile</p>
                    <div style={{maxWidth: '400px'}}>
                        <FormUserProfile onChange={handleChange} input={input} inputError={inputError}/>
                    </div>
                    <div className='G-btn-add-user'>
                        <CustomButton onClick={handleUpdateProfile} name={'Add User'}/>
                    </div>
                </div>


                {/* ================== user info content ================== */}

                <div className='P-user-content'>
                    <UserInfo input={input}
                              chooseUserBgImg={chooseUserBgImg}
                              chooseUserImg={chooseUserImg}/>

                </div>

            </div>
        </div>
    </>

};

export default UserProfile;