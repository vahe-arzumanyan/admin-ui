import React from 'react';
import './style.scss';

const CustomSelect = ({onChange, value, name}) => {

    const handleChange = (e) => {
        onChange(e)
    }
    return <div className='custom-select'>
        <select onChange={handleChange}>
            <label>
                <p>custom label</p>
                <option disabled>{name}</option>
                <option value={value.male}>{value.male}</option>
                <option value={value.female}>{value.female}</option>
            </label>


        </select>
    </div>

};

export default CustomSelect;