import React, {useState} from 'react';

const NotificationItems = () => {

    const [modalInfo, setModalInfo] = useState(false)
    const randomColor = () => {
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let connectRGB = 'rgb(' + x + ',' + y + ',' + z + ')'
        return connectRGB
    }

    const notificationInfo = () => {
        let notificationList = {
            title:'notification title',
            description:'notification description',
            Close:'X',
            color:randomColor(),
            id:Date.now()
        }
        setModalInfo(...[modalInfo, notificationList])
    }


    return <div>

        </div>

};

export default NotificationItems;