import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Inventory = () => {

    const [services, setServices] = useState([])
    const [isReload, setIsReaload] = useState(false)
    useEffect(() => {
        fetch("http://localhost:4000/allproducts")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isReload])

    const handleRemove = id => {
        const confirmation = window.confirm("Are you sure?")
        if (confirmation) {
            const url = `http://localhost:4000/allproducts/${id}`
            fetch(url, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    setIsReaload(!isReload)
                })
        }
    }
    return (
        <div className='row container mx-auto'>

            {
                services.map(service =>
                    <div className='col-4 ' key={service._id} >
                        <div className='my-5'>

                            <Card className='mx-auto' style={{ width: '18rem', height: " 650px" }}>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title><h3>{service.name}</h3></Card.Title>
                                    <Card.Text className='fs-5'>
                                        Brand: {service.brand}<br></br>
                                        Description: {service.description}<br></br>
                                        Price: ${service.price}<br></br>
                                        Quantity:{service.quantity}<br></br>
                                        Supplier:{service.supplier}
                                    </Card.Text>

                                    <Button onClick={() => handleRemove(service._id)} className='text-white fs-5' >Delete</Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Inventory;