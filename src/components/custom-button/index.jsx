import React from 'react';
import './style.scss';


const CustomButton = ({onClick, onCloseX, name, infoClassName}) => {


    if (infoClassName === 'addUser') {
        infoClassName = 'add'
    }
    if (infoClassName === 'editList') {
        infoClassName = 'edit'
    }
    if (infoClassName === 'removeList') {
        infoClassName = 'remove'
    }
    if (infoClassName === 'close') {
        infoClassName = 'close'
    }


    return <button onClick={name === 'Close' ? onCloseX : onClick} className={infoClassName}>
        {name}
    </button>

};

export default CustomButton;