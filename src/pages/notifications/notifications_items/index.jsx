import React from 'react';
import './style.scss';

const NotificationItems = ({item, deleteItem}) => {


    return <div className='P-notification-show-content'>
        <div className='G-justify-between G-align-center P-notification-box' style={{backgroundColor: item.BgColor}}>
            <div className='G-flex-column'>
                <p className='P-notification-title'>{item.title}</p>
                <p className='P-notification-description'>{item.description}</p>
            </div>
            <div onClick={() => deleteItem(item.id)} className='P-notification-remove'>{item.close}</div>
        </div>

    </div>

};

export default NotificationItems;