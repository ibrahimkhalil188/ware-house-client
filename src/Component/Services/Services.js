import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://hidden-harbor-53017.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className='row container container mx-auto' id='services'>
            <h1 className='text-center mt-5 py-4 text-white'>Products</h1>
            <div className='col-8'>
                <div className='row mx-auto'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <div className='col-4'>

                <div>
                    <h1 className='text-white text-center'>All time best</h1>
                </div>
            </div>
        </div>
    );
};

export default Services;