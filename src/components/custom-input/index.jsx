import React from 'react';
import './style.scss';

const CustomInput = ({onChange, value, name, type, errorText}) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <form>
        <div className='P-custom-input-parent G-flex-column'>
            <label className='P-custom-label'>{name}</label>
            <input onChange={handleChange}
                   value={value}
                   name={name}
                   type={type}
            />
            <p className={errorText ? "stringError" : ''}>{errorText}</p>
        </div>
    </form>

};

export default CustomInput;