import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `https://hidden-harbor-53017.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div>
            <p>This is update</p>
        </div>
    );
};

export default Update;