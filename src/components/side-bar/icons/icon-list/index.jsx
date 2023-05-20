import React from 'react';
import './style.scss';

const IconList = ({item}) => {
    return <div className='P-icon-list-box G-flex'>

        <div className='P-icon-item G-flex-wrap'>
            <div className='P-icon-border'><span className={item.icon1}></span></div>
            <div className='P-icon-border'><span className={item.icon2}></span></div>
            <div className='P-icon-border'><span className={item.icon3}></span></div>
            <div className='P-icon-border'><span className={item.icon4}></span></div>
            <div className='P-icon-border'><span className={item.icon5}></span></div>
            <div className='P-icon-border'><span className={item.icon6}></span></div>
            <div className='P-icon-border'><span className={item.icon7}></span></div>
            <div className='P-icon-border'><span className={item.icon8}></span></div>
            <div className='P-icon-border'><span className={item.icon9}></span></div>
            <div className='P-icon-border'><span className={item.icon10}></span></div>
            <div className='P-icon-border'><span className={item.icon11}></span></div>
            <div className='P-icon-border'><span className={item.icon12}></span></div>
            <div className='P-icon-border'><span className={item.icon13}></span></div>
            <div className='P-icon-border'><span className={item.icon14}></span></div>
            <div className='P-icon-border'><span className={item.icon15}></span></div>
        </div>

    </div>

};

export default IconList;