import React from 'react';
import './style.scss';
import CustomInput from "../../../components/custom-input";

const FormUserProfile = ({onChange, input, inputError}) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <div className='G-flex-column'>

        <CustomInput
            placeholder='first name'
            onChange={handleChange}
            name='firstName'
            type='text'
            value={input.firstName}
            errorText={inputError.errorFirstName}

        />

        <CustomInput
            placeholder='last name'
            onChange={handleChange}
            name='lastName'
            type='text'
            value={input.lastName}
            errorText={inputError.errorLastName}
        />

        <CustomInput
            onChange={handleChange}
            name='age'
            type='number'
            value={input.age}
            placeholder='age'
            errorText={inputError.errorAge}
        />

        <CustomInput
            onChange={handleChange}
            name='email'
            type='text'
            value={input.email}
            placeholder='email'
            errorText={inputError.errorEmail}
        />

        <CustomInput
            placeholder='city'
            onChange={handleChange}
            name='city'
            type='text'
            value={input.city}
            errorText={inputError.errorCity}
        />

        <CustomInput
            placeholder='profession'
            onChange={handleChange}
            name='profession'
            type='text'
            value={input.profession}
            errorText={inputError.errorProfession}
        />


    </div>

};

export default FormUserProfile;