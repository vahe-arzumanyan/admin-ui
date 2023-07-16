import React from 'react';

const CustomButton = ({onClick, name}) => {

    return <button onClick={onClick}>
        {name}
    </button>

};

export default CustomButton;