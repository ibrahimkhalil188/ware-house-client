import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 mx-auto text-white'>
            <h1 className='text-center'>Register please</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="Full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button className='w-25' style={{ backgroundColor: "#e51a4b" }} type="submit">
                    Register
                </Button>
            </Form>
            <p className="text-white fs-5 py-2">
                We'll never share your information with anyone else.
            </p>
            <div className='my-4'>
                <h5>Already have an account? <Link to="/login">Login Please</Link></h5>
            </div>
        </div>
    );
};

export default Register;