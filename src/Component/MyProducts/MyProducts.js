import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Service from '../Service/Service';

const MyProducts = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userProducts, setUserProducts] = useState([])

    useEffect(() => {
        const email = user?.email
        const url = `https://hidden-harbor-53017.herokuapp.com/allproducts?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserProducts(data))
    }, [user?.email,])

    return (
        <div className='col-8'>
            <div className='row mx-auto'>
                {
                    userProducts.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default MyProducts;