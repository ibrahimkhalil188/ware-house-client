import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from "../../Asset/Logo/google.png"
const Login = () => {
    return (
        <div className='w-50 mx-auto text-white'>
            <h1 className='text-center'>Login please</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-25 bg-primary' type="submit">
                    Login
                </Button>

                <div className='my-4'>
                    <h5>Forgot password? <span className='text-primary text-decoration-underline' style={{ cursor: "pointer" }}>Reset Please</span></h5>
                </div>

            </Form>
            <div className='my-4'>
                <h5>Don't have any account? <Link to="/register">Register Please</Link></h5>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-50 bg-primary' style={{ height: "2px" }}>
                </div>
                <div className='mx-2'>OR</div>
                <div className='w-50 bg-primary' style={{ height: "2px" }}>
                </div>
            </div>
            <div>
                <div className='w-75 mx-auto fs-5 m-5 p-2 rounded text-center bg-primary'>
                    <img className='mx-4' style={{ width: "53px" }} src={google} alt="" />
                    Login with Google
                </div>
            </div>
        </div>
    );
};

export default Login;