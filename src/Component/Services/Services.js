import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://hidden-harbor-53017.herokuapp.com/home")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            <h1 className='text-center my-5 py-4 text-white'>Products</h1>
            <div className='row container mx-auto mt-5 '>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;