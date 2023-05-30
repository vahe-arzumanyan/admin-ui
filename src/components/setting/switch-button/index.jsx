import React from 'react';
import './stytle.scss';

const SwtichButton = () => {
    return <div>
        <label className="switch">
            <input type="checkbox" />
                <span className="slider round"></span>

        </label>
    </div>

};

export default SwtichButton;