import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const Manage = () => {
    const [isReload, setIsReaload] = useState(false)
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://hidden-harbor-53017.herokuapp.com/allproducts/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isReload, id])

    console.log(services)
    const handleRemove = (id, productQuantity) => {
        console.log(productQuantity)

        if (productQuantity === 1) {
            const confirmation = window.confirm("Are you sure?")
            if (confirmation) {
                const url = `https://hidden-harbor-53017.herokuapp.com/allproducts/${id}`
                console.log(url)
                fetch(url, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        setIsReaload(!isReload)
                    })
            }
        } else {
            const quantity = productQuantity - 1
            const data = { quantity }
            const url = `https://hidden-harbor-53017.herokuapp.com/allproducts/${id}`
            fetch(url, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
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

                                    <Button onClick={() => handleRemove(service._id, service.quantity)} className='text-white fs-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Delivered</Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>)
            }

        </div>

    );
};

export default Manage;