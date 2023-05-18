import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../nav-bar";
import UserInfo from "./user-info";
import profileBackgroundImage from '../../../assets/image/profileBackgroundImage.jpg';
import profileUserImage from '../../../assets/image/profileUserImage.jpg';

const UserProfile = () => {

    const [input, setInput] = useState({
        company: '',
        userName: '',
        emailAddress: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        aboutMe: ''
    })

    const [userInfo, setUserInfo] = useState([
        {
            profileBackgroundImage: profileBackgroundImage,
            profileUserImage: profileUserImage,
            userName: 'Name',
            userSurname: 'Surname',
            userNickName: 'NickName',
            userDescription: 'Hello i am React Js Developer ',
            alt:'image'
        }
    ])

    const handleChange = (e) => {
        e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleUpdateProfile = () => {
        alert('Update Profile')
    }

    return <>
            <NavBar name='User Profile'/>
            <div className='G-center' style={{width: '100%'}}>
                <div className='P-user-profile G-justify-center G-justify-between'>
                    <div className='P-user-input'>
                        <p className='P-edit-profile-title'>Edit Profile</p>
                        <form className='P-user-form'>

                            {/* line a / company / username / email address */}
                            <div className='G-justify-between P-input-line-a'>
                                <div className='G-flex-column P-input-company-disabled'>
                                    <label>COMPANY (DISABLED)</label>
                                    <input type='text'
                                           placeholder='Creative Code Inc'
                                           disabled={true}
                                           name='company'
                                           value={input.company}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className='G-flex'>
                                    <div className=' G-flex-column P-input-user-name'>
                                        <label>USERNAME</label>
                                        <input
                                            type='text'
                                            placeholder='Username'
                                            value={input.userName}
                                            onChange={handleChange}
                                            name='userName'
                                        />
                                    </div>
                                    <div className='G-flex-column P-input-email'>
                                        <label>EMAIL ADDRESS</label>
                                        <input
                                            type='text'
                                            placeholder='Email'
                                            value={input.emailAddress}
                                            onChange={handleChange}
                                            name='emailAddress'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* first name / last name */}
                            <div className='P-input-first-last-name G-justify-between'>
                                <div className='P-input-first-name'>
                                    <label>FIRST NAME</label>
                                    <input
                                        type='text'
                                        placeholder='FIRST NAME'
                                        value={input.firstName}
                                        onChange={handleChange}
                                        name='firstName'
                                    />
                                </div>
                                <div className='P-input-last-name'>
                                    <label>LAST NAME</label>
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        value={input.lastName}
                                        onChange={handleChange}
                                        name='lastName'
                                    />
                                </div>
                            </div>

                            {/* address */}
                            <div className='P-input-address G-justify-center'>
                                <div className='G-flex-column'>
                                    <label>ADDRESS</label>
                                    <input
                                        type='text'
                                        placeholder='Home Address'
                                        value={input.address}
                                        onChange={handleChange}
                                        name='address'
                                    />
                                </div>
                            </div>

                            {/* city / country / postal code */}
                            <div className='G-justify-between' style={{margin: '20px 10px'}}>
                                <div className='P-input-city'>
                                    <div className='G-flex-column'>
                                        <label>CITY</label>
                                        <input
                                            type='text'
                                            placeholder='City'
                                            value={input.city}
                                            onChange={handleChange}
                                            name='city'
                                        />
                                    </div>
                                </div>
                                <div className='P-input-country'>
                                    <div className='G-flex-column'>
                                        <label>COUNTRY</label>
                                        <input
                                            type='text'
                                            placeholder='Country'
                                            value={input.country}
                                            onChange={handleChange}
                                            name='country'
                                        />
                                    </div>
                                </div>
                                <div className='P-input-postal-code'>
                                    <div className='G-flex-column'>
                                        <label>POSTAL CODE</label>
                                        <input
                                            type='number'
                                            placeholder='ZIP Code'
                                            value={input.postalCode}
                                            onChange={handleChange}
                                            name='country'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* about me */}
                            <div className='P-input-about-me'>
                                <div className='G-flex-column '>
                                    <label>POSTAL CODE</label>
                                    <textarea
                                        type='text'
                                        placeholder='Here can be your description'
                                        value={input.aboutMe}
                                        onChange={handleChange}
                                        name='country'
                                        rows="5"
                                        cols="50"
                                        maxlength="200"
                                    />
                                </div>
                            </div>
                        </form>
                        <div className='G-justify-end' style={{margin: '15px 10px'}}>
                            <button onClick={handleUpdateProfile} className='P-update-profile'>Update Profile</button>
                        </div>
                    </div>
                    <div className='P-user-content'>
                            {userInfo.length ? userInfo.map((item, index) => {
                                return <UserInfo item={item} key={index}/>

                            }) : null}
                    </div>
                </div>
            </div>
        </>

};

export default UserProfile;