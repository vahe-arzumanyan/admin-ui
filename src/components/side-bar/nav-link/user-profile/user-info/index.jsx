import React from 'react';
import './style.scss';

const UserInfo = ({item}) => {
    return <div className='G-flex-column G-center G-justify-between' style={{height:'100%'}}>
        <div style={{width:'100%'}} className='G-justify-center'>
            <div style={{backgroundImage:`url(${item.profileBackgroundImage})`}} className='G-image-cover P-bkImage'></div>
            <div style={{backgroundImage:`url(${item.profileUserImage})`}} className='G-image-contain P-user-image'></div>
        </div>

     <div className='G-flex-column'>
         <div className='G-flex-column G-align-center G-justify-end P-user-info'>
             <p className='P-user-name'>{item.userName} {item.userSurname}</p>
             <p className='P-user-nick-name'>{item.userNickName}</p>
             <p className='P-user-description'>{item.userDescription}</p>
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

// profileBackgroundImage: 'profileBackgroundImage',
//     profileUserImage: 'profileUserImage',
//     userName: 'Name',
//     userLastName: 'Surname',
//     userNickName: 'NickName',
//     userDescription: 'Hello i am Name'