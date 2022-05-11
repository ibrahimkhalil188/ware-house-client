import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userProducts, setUserProducts] = useState([])

    useEffect(() => {
        const url = `https://hidden-harbor-53017.herokuapp.com/allproducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserProducts(data))
    }, [user.email,])

    return (
        <h1 className='text-white'>
            {userProducts.length}
        </h1>
    );
};

export default MyProducts;