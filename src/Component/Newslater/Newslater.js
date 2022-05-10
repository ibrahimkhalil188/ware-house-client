import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { MdForwardToInbox } from 'react-icons/md'

const Newslater = () => {
    return (
        <div className='row bg-primary text-white'>

            <div className="col-6">
                <div className='m-4'>
                    <h3>Sign up for newsletter</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's Email"
                        />
                        <Button variant="outline-light" id="button-addon2">
                            <MdForwardToInbox></MdForwardToInbox>
                        </Button>
                    </InputGroup>
                    <small>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
                    </small>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center container">
                <Link className='m-2 text-white fs-3' to="/"><AiOutlineInstagram></AiOutlineInstagram></Link>
                <Link className='m-2 text-white fs-3' to="/"> <AiOutlineFacebook></AiOutlineFacebook></Link>
                <Link className='m-2 text-white fs-3' to="/">  <AiFillTwitterCircle></AiFillTwitterCircle></Link>
            </div>
        </div>
    );
};

export default Newslater;