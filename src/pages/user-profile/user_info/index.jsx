import React, {useState} from 'react';
import './style.scss';


const UserInfo = ({input, chooseUserBgImg, chooseUserImg}) => {


    return <div className='G-flex-column G-align-center'>

        {/* choose img*/}

       <div className='G-justify-between'>
           <div className='P-choose-img'>
               <label>upload background image
                   <input onChange={chooseUserBgImg} type='file'/>
               </label>
           </div>

           <div className='P-choose-user-img'>
               <label>upload user image

                   <input onChange={chooseUserImg} type='file'/>
               </label>
           </div>
       </div>

        {/* img */}

        <div className='P-upload-img G-justify-center'>
            {input.userBgImg && <img src={input.userBgImg} alt="#"/>}
            {input.userImg && <img src={input.userImg} alt="img"/>}
        </div>



    </div>


    {/* user information*/
    }

    // <div>
    //     <div className='G-flex-column  G-align-center P-user-info'>
    //         <div className='G-flex'>
    //             <p style={{marginLeft: '5px'}}>{input.firstName}</p>
    //             <p>{input.lastName}</p>
    //         </div>
    //         <p>{input.age}</p>
    //         <p>{input.phone}</p>
    //         <p>{input.email}</p>
    //         <p>{input.city}</p>
    //         <p>{input.profession}</p>
    //     </div>
    //
    //
    //     {/*<div className='P-user-social-icon G-flex-column G-align-center'>*/}
    //     {/*    <div className='P-icons-under-line'></div>*/}
    //     {/*    <div className='G-flex'>*/}
    //     {/*        <span className='icon-facebook-fill'></span>*/}
    //     {/*        <span className='icon-twitter-fill'></span>*/}
    //     {/*        <span className='icon-google-plus'></span>*/}
    //     {/*    </div>*/}
    //
    //     {/*</div>*/}
    // </div>


};

export default UserInfo;
