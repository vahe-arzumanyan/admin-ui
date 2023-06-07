import React from 'react';
import './style.scss';

const NotificationButton = ({item, openModal}) => {
    return <div className='P-notification-button-name'>
        <button onClick={openModal}>{item}</button>
    </div>

};

export default NotificationButton;