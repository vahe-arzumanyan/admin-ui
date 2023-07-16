import React, {useState} from 'react';
import './style.scss';
import NavBar from "../../components/nav-bar";
// google map
import GoogleMapReact from 'google-map-react'
import CustomInput from "../../components/custom-input";

const Map = ({location, zoomLevel}) => {

    const [test, setTest] = useState({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'


    })

    const handleChange = (e) => {
        setTest({...test, [e.target.name]: e.target.value})
    }
    return <div>

        <NavBar name='Maps'/>

        {/* ===================== google map ===================== */}
       <form className='G-flex-column ggg'>
           <CustomInput
               type='text'
               name='firstName'
               value={test.firstName}
               onChange={handleChange}
           />
           <CustomInput
               type='text'
               name='lastName'
               value={test.lastName}
               onChange={handleChange}
           />
           <CustomInput
               type='text'
               name='email'
               value={test.email}
               onChange={handleChange}
           />
       </form>

    </div>
};

export default Map;