import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description, brand, price, supplier, quantity } = service
    const navigate = useNavigate()
    return (
        <div className='col-6 my-5 d-flex justify-content-center'>

            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>
                        Brand: {brand}
                        {description}
                        Price: ${price}
                        Quantity:{quantity}
                        Supplier:{supplier}
                    </Card.Text>
                    <Button onClick={() => navigate(`/manage/${_id}`)} className='text-white fs-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Manage Product</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;