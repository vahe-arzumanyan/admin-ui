import React from 'react';
import './style.scss';
import CustomButton from "../../../../components/custom-button";
import FormUserProfile from "../../add-profile/form-user-profile";


const EditUserList = ({handleChange, chooseUserBgImg, chooseUserImg, handleAddUser, userInput, userInputError}) => {



    return <div className='G-flex-column P-create-user-content'>
        <p className='P-create-profile-title'>Create Profile</p>
        <div style={{maxWidth: '400px'}}>
            <FormUserProfile onChange={handleChange}
                             userInput={userInput}
                             userInputError={userInputError}
            />
        </div>

        {/* choose image start */}

        <div className='G-flex-column G-align-center'>
            <div className='P-choose-img'>
                <label>upload background image
                    <input onChange={chooseUserBgImg} type='file'/>
                </label>
                <p>{userInputError.errorUserBgImg}</p>

            </div>

            <div className='P-choose-user-img'>
                <label>upload user image
                    <input onChange={chooseUserImg} type='file'/>
                </label>
                <p>{userInputError.errorUserImg}</p>
            </div>
        </div>

        <div className='G-btn-add-user'>
            <CustomButton onClick={handleAddUser} name={'Add User'} infoClassName={'addUser'}/>
        </div>

    </div>


};

export default EditUserList;