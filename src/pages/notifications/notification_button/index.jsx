import React from 'react';
import './style.scss';

const NotificationButton = ({item, onClick}) => {

    const position = () => {
        onClick()
     console.log(item)

    }
    return <div className='P-notification-button-name'>
        <button onClick={position} style={{left:item.left, top:item.top }}>{item.buttonName}</button>
    </div>

};

export default NotificationButton;