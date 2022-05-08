import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
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
            <Nav.Link as={Link} to="/additem">Add item</Nav.Link>
            <Nav.Link as={Link} to="/updateitem">update item</Nav.Link>
            <div>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Manage;