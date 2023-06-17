import React from 'react';
import './style.scss';

const NotificationButton = ({item, onClick}) => {

    return <div className='P-notification-button-name'>
        <button onClick={onClick}>{item.buttonName}</button>
    </div>

};

export default NotificationButton;