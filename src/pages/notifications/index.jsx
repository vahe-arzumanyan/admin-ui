import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
import NotificationItems from "./notifications_items";
import NotificationButton from "./notification_button";

const Notifications = () => {


    const [openModal, setOpenModal] = useState(false)

    // empty array
    const [createInfo, setCreateInfo] = useState([])

    const [button, setButton] = useState([
        {
            buttonName: 'Top Left',
            id: 1,
            topLeftStyle: {
                top: '0',
                left: '100%',
                position: 'absolute'
            }
        },
        {
            buttonName: 'Top Center',
            id: 2,
            positionStyle: {
                top: '0',
                left: '33.33%',
                position: 'absolute'
            }
        },
        {
            buttonName: 'Top Right',
            id: 3,
            positionStyle: {
                top: '0',
                left: '50%',
                position: 'absolute'
            }
        },
        {
            buttonName: 'Bottom Left',
            id: 4,
            positionStyle: {
                top: '100%',
                left: '0',
                position: 'absolute'
            }
        },
        {
            buttonName: 'Bottom Center',
            id: 5,
            positionStyle: {
                top: '100%',
                left: '33.33%',
                position: 'absolute'
            }
        },
        {
            buttonName: 'Bottom Right',
            id: 6,
            positionStyle: {
                top: '100%',
                left: '100%',
                position: 'absolute'
            }
        }
    ])


    const randomColor = () => {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let connectRGB = 'rgb(' + x + ',' + y + ',' + z + ')'
        return connectRGB
    }


    const handleClick = () => {
        setOpenModal(!openModal)
        let notificationList = {
            title: 'notification title',
            description: 'notification description',
            close: 'x',
            BgColor: randomColor(),
            id: Date.now()
        }
        setCreateInfo([...createInfo, notificationList])
    }

    const handleRemove = (id) => {
        let newList = createInfo.filter(item => item.id !== id)
        setCreateInfo(newList)
    }


    return <>
        <NavBar name='Notification'/>
        <div className='P-notification'>

            <div className='P-notification-content G-center'>

                {/* =================== notification content =================== */}

                <div className='P-notification-size'>
                    {createInfo.length ? createInfo.map((item, index) => {
                        return <NotificationItems
                            key={index}
                            item={item}
                            deleteItem={handleRemove}
                        />
                    }) : null}
                </div>

                {/*<p>Notification Places</p>*/}

                {/* =================== notification button =================== */}

                <div className='P-notification-button'>
                    {button.map((item, index) => {
                        return <NotificationButton
                            key={index}
                            item={item}
                            onClick={handleClick}

                        />
                    })}
                </div>

            </div>
        </div>

    </>
};

export default Notifications;