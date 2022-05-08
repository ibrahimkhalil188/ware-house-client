import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description, brand, price, supplier, quantity


    } = service
    return (
        <div className='col-4 my-5'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>
                        <h5>Brand: {brand}</h5>
                        {description}
                        <h4>Price: ${price}</h4>
                        <h5>Quantity:{quantity}</h5>
                        <h5>Supplier:{supplier}</h5>
                    </Card.Text>
                    <Button className='text-white fs-5' variant="outline-dark" btn style={{ backgroundColor: "#6366f1" }}>Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;