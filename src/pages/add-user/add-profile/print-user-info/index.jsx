import React from 'react';
import './style.scss';


const UserInfo = ({userInput}) => {


    return <div className='G-flex-column G-align-center'>


        <div className='P-upload-img G-flex-column G-justify-center'>
            {(userInput.userBgImg || userInput.userImg) &&
            <div style={{backgroundImage: `url("${userInput.userBgImg}")`}}
                 className='P-image-main G-image-cover G-flex G-align-end G-justify-center'>
                {userInput.userImg &&
                <div style={{backgroundImage: `url("${userInput.userImg}")`}}
                     className='P-image-profile G-image-cover'/>}
            </div>}
        </div>

        <div>
            <div className='G-flex-column  G-align-center P-user-info'>
                <div className='G-flex'>
                    <p style={{marginLeft: '5px'}}>{userInput.firstName}</p>
                    <p>{userInput.lastName}</p>
                </div>
                <p>{userInput.age}</p>
                <p>{userInput.phone}</p>
                <p>{userInput.email}</p>
                <p>{userInput.city}</p>
                <p>{userInput.profession}</p>
            </div>

            <div className='P-user-social-icon G-flex-column G-align-center'>
                <div className='P-icons-under-line'></div>
                <div className='G-flex'>
                    <span className='icon-facebook-fill'></span>
                    <span className='icon-twitter-fill'></span>
                    <span className='icon-google-plus'></span>
                </div>

            </div>
        </div>


    </div>


};

export default UserInfo;
