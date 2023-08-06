import React from 'react';
import './style.scss';
import CustomInput from "../../../../components/custom-input";
const FormUserProfile = ({onChange, userInput, userInputError}) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <div className='G-flex-column'>

        <CustomInput
            placeholder='first name'
            onChange={handleChange}
            name='firstName'
            type='text'
            value={userInput.firstName}
            errorText={userInputError.errorFirstName}

        />

        <CustomInput
            placeholder='last name'
            onChange={handleChange}
            name='lastName'
            type='text'
            value={userInput.lastName}
            errorText={userInputError.errorLastName}
        />

        <CustomInput
            onChange={handleChange}
            name='age'
            type='number'
            value={userInput.age}
            placeholder='age'
            errorText={userInputError.errorAge}
        />

        <CustomInput
            onChange={handleChange}
            name='email'
            type='text'
            value={userInput.email}
            placeholder='email'
            errorText={userInputError.errorEmail}
        />

        <CustomInput
            placeholder='city'
            onChange={handleChange}
            name='city'
            type='text'
            value={userInput.city}
            errorText={userInputError.errorCity}
        />

        <CustomInput
            placeholder='profession'
            onChange={handleChange}
            name='profession'
            type='text'
            value={userInput.profession}
            errorText={userInputError.errorProfession}
        />

    </div>

};

export default FormUserProfile;