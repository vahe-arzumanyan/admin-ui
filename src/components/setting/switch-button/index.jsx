import React from 'react';
import './stytle.scss';

const SwitchButton = ({onChange, value }) => {
    return <div>
        <label className="switch">
            <input type="checkbox" value={value} onChange={onChange}/>
                <span className="slider round"/>
        </label>
    </div>
};

export default SwitchButton;