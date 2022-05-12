import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/allproducts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    return (
        <div>
            <Card className='mx-auto' style={{ width: '22rem' }}>
                <Card.Img style={{ height: "220px", width: "325px" }} variant="top" src={product[0]?.img} />
                <Card.Body>
                    <Card.Title><h1>{product[0]?.name}</h1></Card.Title>
                    <Card.Text>
                        Brand: {product[0]?.brand}
                        {product[0]?.description}
                        Price: ${product[0]?.price}
                        Quantity:{product[0]?.quantity}
                        Supplier:{product[0]?.supplier}
                    </Card.Text>
                    <Button onClick={() => navigate("/inventory")} className='text-white fs-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Manage Product</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Update;