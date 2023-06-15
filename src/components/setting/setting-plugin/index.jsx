import React, {useEffect, useState} from 'react';
import './style.scss';
import {useSetting} from "../useSetting";
import SwitchButton from "../switch-button";
import {useDispatch} from "react-redux";
import {createImg, createColor, setIsImage} from "../../../store/reducers/plugin";


const PluginStyle = () => {

    const [pluginColor, pluginImg] = useSetting();
    const dispatch = useDispatch()
    const [isImageChange, setIsImageChange] = useState(false)
    // function color / image

    const changeColor = (color) => {
        dispatch(createColor(color))
    }

    const changeImg = (item) => {
        dispatch(createImg((item)))
    }

    const handleChangeIsImage = (e) => {
        setIsImageChange(!isImageChange)
    }

    useEffect(() => {
        dispatch(setIsImage(isImageChange))
    }, [isImageChange])


    return (
        <div className='P-hint-box'>
            <div style={{padding: '10px'}}>
                <p style={{margin: '3px 0'}}>SIDEBAR STYLE</p>
                <div className='G-justify-between'>
                    <p style={{color: 'black'}}>background Image</p>
                    <SwitchButton value={isImageChange} onChange={handleChangeIsImage}/>
                </div>
                <div>
                    <div className='G-justify-between' style={{margin: '10px 0'}}>
                        <p>Filter</p>
                        <div className='P-color-size'>
                            {pluginColor.map(item => (
                                <span key={item.id} onClick={() => changeColor(item.color)}
                                      style={{backgroundColor: item.color}} infoColor={item.color}></span>
                            ))}
                        </div>
                    </div>

                    {/* image content */}

                    <div className='G-flex-column'>
                        <p>SIDEBAR IMAGES</p>
                        <div className='G-justify-between'>
                            {pluginImg.map(item => (
                                <div onClick={() => changeImg(item)} key={item.id}
                                     style={{backgroundImage: `url("${item.img}")`}}
                                     className='G-image-cover P-change-img'></div>
                            ))}
                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default PluginStyle;