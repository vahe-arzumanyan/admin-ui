import React, {useState} from 'react';
import './style.scss';
import EditUserList from "../edit-user-list";
import RemoveCustomModal from "../../../../components/custom-modal/remove-custom-modal";
import CustomButton from "../../../../components/custom-button";
import AddUserList from "../../add-profile";


const ResultUsersList = ({elementEdit}) => {

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
            <div style={{backgroundImage: `url("${elementEdit.userBgImg}")`}}
                 className='P-image-main G-image-cover G-flex G-align-end G-justify-center'>
                <div style={{backgroundImage: `url("${elementEdit.userImg}")`}}
                     className='P-image-profile G-image-cover'/>
            </div>
        </div>
        <div className='G-flex-column G-align-center P-user-result'>
            <div className='G-flex'>
                <p>{elementEdit.firstName}</p>
                <p>{elementEdit.lastName}</p>
            </div>
            <p>age {elementEdit.age}</p>
            <p>{elementEdit.email}</p>
            <p>city {elementEdit.city}</p>
            <p>{elementEdit.position}</p>
        </div>

        <div className='G-justify-between'>
            <CustomButton onClick={handleEditUserInfo} name='edit' infoClassName={'editList'}/>
            <CustomButton onClick={handleRemoveUserList} name='remove' infoClassName={'removeList'}/>
        </div>

        {/*  ========================== edit user info ==========================  */}

        {editUserInfo ? <AddUserList onClose={handleEditUserInfo}
                                         editItem={elementEdit}
        name={'editUser'}/> : null}

        {/*  ========================== remove user list ==========================  */}

        {removeUserList ? <RemoveCustomModal onClose={handleRemoveUserList}
                                             elementEdit={elementEdit}
        /> : null}
    </div>
};

export default ResultUsersList;

