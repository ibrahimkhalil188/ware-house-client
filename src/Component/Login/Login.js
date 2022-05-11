import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from "../../Asset/Logo/google.png"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [inputError, setInputError] = useState("")
    const [inputEmailError, setInputEmailError] = useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, emailUser, emailLoading, emailError] = useSignInWithGoogle(auth);

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

    const handleLogin = event => {
        event.preventDefault()


        if (email && password) {
            signInWithEmailAndPassword(email, password)
        }



        if (error) {
            if (error.message.includes("auth/wrong-password")) {
                toast.error("wrong-password", { id: "test" })
            }
            if (error.message.includes("Error (auth/user-not-found)" || "auth/invalid-email " || "(auth/internal-error")) {
                toast.error("Register please", { id: "test" })
            }
            else { toast.error("something else", { id: "test" }) }

        }
    }


    if (emailUser) {

        if (error.message.includes("auth/popup-closed-by-user")) {
            toast.error("popup-closed-by-user", { id: "test" })
        }
    }
    useEffect(() => {
        if (user) {
            toast.success(user.email)

        }
        if (error) {
            toast.error(error.message)
        }
        if (!error) {
            navigate("/")
        }
    })


    if (emailLoading) {
        <p>loading</p>
    }
    useEffect(() => {
        if (emailError) {
            toast.success("User created successfully", { id: "test" })
            navigate("/")
        }
    }, [navigate, emailError])


    return (
        <div className='w-50 mx-auto text-white'>
            <h1 className='text-center'>Login please</h1>
            <Toaster />
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required onChange={getEmail} />
                    <span className='text-danger'>{inputEmailError ? inputEmailError : ""}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required onChange={getPassword} />
                    <span className='text-danger'>{inputError ? inputError : ""}</span>
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
                <div onClick={() => signInWithGoogle()} className='w-75 mx-auto fs-5 m-5 p-2 rounded text-center bg-primary'>
                    <img className='mx-4' style={{ width: "53px" }} src={google} alt="" />
                    Login with Google
                </div>
            </div>
        </div>
    );
};

export default Login;