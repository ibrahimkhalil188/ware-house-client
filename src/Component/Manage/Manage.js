import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const Manage = () => {
    const [isReload, setIsReaload] = useState(false)
    const navigate = useNavigate()
    const [services, setServices] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://hidden-harbor-53017.herokuapp.com/allproducts/${id}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isReload, id])

    const addNewQuantity = event => {

        event.preventDefault()
        const input = parseInt(event.target.quantity.value)
        const newQuantity = input + parseInt(services[0].quantity)

        const data = { quantity: newQuantity }
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

    const handleDeliver = (id, productQuantity, previousSold) => {
        if (productQuantity < 1) {
            alert("you can't deliver Before Add product ")
            return
        }
        const quantity = productQuantity - 1
        const sold = parseInt(previousSold + 1)

        const data = { sold, quantity, }

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
    return (
        <div className='row container mx-auto'>

            {
                services.map(service =>
                    <div className='col-6 ' key={service._id} >
                        <div className='my-5'>

                            <Card className='mx-auto' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title><h1>{service.name}</h1></Card.Title>
                                    <Card.Text className='fs-4'>
                                        Brand: {service.brand}<br></br>
                                        Description: {service.description}<br></br>
                                        Price: ${service.price}<br></br>
                                        Quantity:{service.quantity}<br></br>
                                        Supplier:{service.supplier}<br></br>
                                        Sold:{service.sold}
                                    </Card.Text>
                                    <Button onClick={() => navigate(`/update/${service._id}`)} className='text-white fs-5 me-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Update</Button>

                                    <Button onClick={() => handleDeliver(service._id, service.quantity, service.sold)} className='text-white fs-5' variant="outline-dark" style={{ backgroundColor: "#e51a4b" }}>Delivered</Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>)
            }
            <div className='col-6 d-flex justify-content-center align-items-center'>
                <Form onSubmit={addNewQuantity}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="number" name='quantity' placeholder="Quantity" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default Manage;