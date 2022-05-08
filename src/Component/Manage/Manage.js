import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Manage = () => {
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://hidden-harbor-53017.herokuapp.com/allproducts")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleRemove = id => {
        console.log(id);
    }
    return (
        <div className='row container mx-auto'>

            {
                services.map(service =>
                    <div className='col-4 ' key={service._id} >
                        <div className='my-5'>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title><h1>{service.name}</h1></Card.Title>
                                    <Card.Text>
                                        Brand: {service.brand}
                                        {service.description}
                                        Price: ${service.price}
                                        Quantity:{service.quantity}
                                        Supplier:{service.supplier}
                                    </Card.Text>
                                    <Button onClick={() => navigate(`/update/${service._id}`)} className='text-white fs-5 me-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Update</Button>
                                    <Button onClick={() => handleRemove(service._id)} className='text-white fs-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>)
            }

        </div>

    );
};

export default Manage;