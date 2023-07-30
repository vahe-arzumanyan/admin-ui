import React, {useState} from 'react';
import './style.scss';
import CustomButton from "../../../components/custom-button";
import RemoveCustomModal from "../../../components/custom-modal/remove-custom-modal";
import FormUserProfile from "../../user-profile/form-user-profile";

const UsersResult = ({item}) => {

    const [editUserInfo, setEditUserInfo] = useState(false)
    const [removeUserList, setRemoveUserList] = useState(false)


    const handleEditUserInfo = () => {
        setEditUserInfo(!editUserInfo)
    }
    const handleRemoveUserList = () => {
        setRemoveUserList(!removeUserList)
    }


    return <div className='G-flex-column P-users-box'>
        <div className='P-upload-img G-flex-column G-justify-center'>
            <div style={{backgroundImage: `url("${item.userBgImg}")`}}
                 className='P-image-main G-image-cover G-flex G-align-end G-justify-center'>
                <div style={{backgroundImage: `url("${item.userImg}")`}} className='P-image-profile G-image-cover'/>
            </div>
        </div>
        <div className='G-flex-column G-align-center P-user-result'>
            <div className='G-flex'>
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
            </div>
            <p>age {item.age}</p>
            <p>{item.email}</p>
            <p>city {item.city}</p>
            <p>{item.position}</p>
        </div>

        <div className='G-justify-between'>
            <CustomButton onClick={handleEditUserInfo} name='edit' infoClassName={'editList'}/>
            <CustomButton onClick={handleRemoveUserList} name='remove' infoClassName={'removeList'}/>
        </div>

        {/*  ========================== edit user info ==========================  */}

        {editUserInfo ? <FormUserProfile onClose={handleEditUserInfo}
                                         editInfoUser={item}/> : null}

        {/*  ========================== remove user list ==========================  */}

        {removeUserList ? <RemoveCustomModal onClose={handleRemoveUserList}
                                             removeItem={item}
                                             name={'userName'}/> : null}
    </div>
};

export default UsersResult;

