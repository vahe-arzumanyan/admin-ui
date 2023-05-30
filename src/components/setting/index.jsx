import React, {useState} from 'react';
import './style.scss';
import PluginStyle from "./setting-plugin/index";

const Setting = () => {

    const [settingPlugin, setSettingPlugin] = useState(false);

    const handleClick = () => {
        setSettingPlugin(!settingPlugin);
    }

    return <>

        <div className='P-setting-parent G-justify-end'>
            <div className='P-setting G-center'>
                    <span className='G-icon-svg icon-setting' onClick={handleClick}>
                    </span>
                {settingPlugin ? <PluginStyle/> : null}
            </div>
        </div>
    </>

};

export default Setting;