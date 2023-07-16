import React from 'react';
import './style.scss';

const CustomInput = ({onChange, value, name, type, errorText, placeholder}) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <div className='G-input'>
        <label>
            {name?<p>{name}</p>:null}
            <input onChange={handleChange}
                   value={value}
                   placeholder={placeholder}
                   name={name}
                   type={type}
            />
        </label>
        <p className={errorText ? "stringError" : ''}>{errorText}</p>
    </div>

};

export default CustomInput;