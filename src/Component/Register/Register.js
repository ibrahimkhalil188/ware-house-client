import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [inputError, setInputError] = useState("")
    const [inputEmailError, setInputEmailError] = useState("")
    const [inputPasswordError, setInputPasswordError] = useState("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const getEmail = event => {
        const inputEmail = event.target.value
        if (/\S+@\S+\.\S+/.test(inputEmail)) {
            setEmail(inputEmail)
            setInputEmailError("")
        }
        else { setInputEmailError("Please provide a valid email") }
    }

    const getPassword = event => {
        const inputPassword = event.target.value


        if (inputPassword.length >= 6) {
            setPassword(inputPassword)
            setInputError("")

        }
        else {
            setInputError("Invalid Password")
        }
    }
    const getConfirmPassword = event => {
        const inputPassword = event.target.value


        if (inputPassword === password) {
            setPassword(inputPassword)
            setInputPasswordError("")

        }
        else {
            setInputPasswordError("password mitch match")
        }
    }

    const handleRegister = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
        toast.success("user created")
        navigate("/verify")

    }
    if (error) {
        toast.error(error.message)
    }
    useEffect(() => {
        if (user) {
            toast.success(user.email)
        }
    })
    return (
        <div className='w-50 mx-auto text-white'>
            <h1 className='text-center'>Register please</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="Full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={getEmail} required />
                    <span className='text-danger'>{inputEmailError ? inputEmailError : ""}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={getPassword} required />
                    <span className='text-danger'>{inputError ? inputError : ""}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={getConfirmPassword} required />
                    <span className='text-danger'>{inputPasswordError ? inputPasswordError : ""}</span>
                </Form.Group>
                <Button className='w-25 bg-primary' type="submit">
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