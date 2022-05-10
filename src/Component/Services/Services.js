import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://hidden-harbor-53017.herokuapp.com/allproducts?limit=6")
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

                <div className='text-white text-center'>
                    <h1 >All time best</h1>
                    <p>Best selling or rating products will be added here dynaicmaly</p>
                </div>
            </div>
        </div>
    );
};

export default Services;