import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Manage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `https://hidden-harbor-53017.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    console.log(product);
    return (
        <div>
            <h1 className='text-white'>This is update page{id}</h1>
            <Link to="additem">Add item</Link>
            <Link to="update">update item</Link>
            <div>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Manage;