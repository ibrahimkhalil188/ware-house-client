import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description, brand, price, supplier, quantity } = service
    const navigate = useNavigate()
    return (

        <div className='col-6 my-5 d-flex justify-content-center'>

            <Card style={{ width: '22rem' }}>
                <Card.Img style={{ height: "220px", width: "325px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text className='fs-5'>
                        Brand: {brand}<br></br>
                        Description: {description}<br></br>
                        Price: ${price}<br></br>
                        Quantity:{quantity}<br></br>
                        Supplier:{supplier}
                    </Card.Text>
                    <Button onClick={() => navigate(`/manage/${_id}`)} className='text-white fs-5'>Manage Product</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Service;