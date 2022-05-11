import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        toast(loading)
    }
    if (error) {
        toast.error(error.message)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="#131022" variant="dark" style={{ height: "83px" }}>
            <Container>
                <Navbar.Brand as={Link} to="/home" className='fs-3'>Mobile Land</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user ? <div className='d-flex'>
                                <Nav.Link as={Link} to="/login" onClick={() => signOut(auth)}>
                                    SignOut
                                </Nav.Link>
                                <Nav.Link as={Link} to="/additem">
                                    Add products
                                </Nav.Link>
                                <Nav.Link as={Link} to="/manage">
                                    Manage products
                                </Nav.Link>
                                <Nav.Link as={Link} to="/myproducts">
                                    My products
                                </Nav.Link>
                            </div>

                                : <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;