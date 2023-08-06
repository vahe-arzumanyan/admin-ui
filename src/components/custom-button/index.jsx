import React from 'react';
import './style.scss';


const CustomButton = ({onClick, name, infoClassName}) => {


    if (infoClassName === 'addUser') {
        infoClassName = 'add'
    }
    if (infoClassName === 'editList') {
        infoClassName = 'edit'
    }
    if (infoClassName === 'removeList') {
        infoClassName = 'remove'
    }


    return <button onClick={onClick} className={infoClassName}>
        {name}
    </button>

};

export default CustomButton;