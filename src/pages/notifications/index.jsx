import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import NotificationItems from "./notifications_items";
import NotificationButton from "./notification_button";

const Notifications = () => {

const [openModal, setOpenModal] = useState(false)
    const [button, setButton] = useState([
        {
            buttonName: 'Top Left',
            id: 1
        },
        {
            buttonName: 'Top Center',
            id: 2
        },
        {
            buttonName: 'Top Right',
            id: 3
        },
        {
            buttonName: 'Bottom Left',
            id: 4
        },
        {
            buttonName: 'Bottom Center',
            id: 5
        },
        {
            buttonName: 'Bottom Right',
            id: 6
        }
    ])


    const [closeModal, setCloseModal] = useState(false)
    const [createInfo, setCreateInfo] = useState([])

    const handleClick = () => {
setOpenModal(!openModal)
    }

    return <div>
        <NavBar name='Notification'/>
        <div className='P-notification G-center'>

            <div className='P-notification-content G-justify-center G-align-end'>

                {/*<p>Notification Places</p>*/}

                {/* =================== notification button =================== */}

                <div className='G-flex-column P-notification-button'>
                        {button.map((item, index) => {
                            return <NotificationButton
                                key={index}
                                item={item.buttonName}
                                itemId={item.id}
                                onClick={handleClick}
                            />
                        })}
                    </div>

            </div>
        </div>
    </div>

};

export default Notifications;