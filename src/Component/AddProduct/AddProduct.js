import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    const addProduct = event => {
        event.preventDefault()
        const supplier = event.target.supplier.value
        const email = event.target.email.value
        const name = event.target.name.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value
        const description = event.target.description.value
        const brand = event.target.brand.value
        const img = event.target.image.value

        const product = { brand, name, price, quantity, description, email, supplier, img }

        fetch('http://localhost:5000/allproducts', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
    }
    return (
        <div className='text-white mb-5'>
            <h1 className='text-center my-4'>Do you want to add new product?</h1>
            <Form onSubmit={addProduct} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your email" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your name" name="supplier" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder=" Product name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder=" Brand name" name="brand" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <textarea className='w-100' type="text" placeholder="Product description" name="description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder=" product price" name="price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder=" product quantity" name="quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder=" product image url" name="image" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;