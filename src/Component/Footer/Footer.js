import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='text-white py-2' style={{ height: "83px", backgroundColor: "black" }}>
            <div className='row d-flex justify-content-center align-items-center container'>
                <div className="col-6 "><h5 className='m-2 p-2'>Copyright © 2022 Mobile Land . All Rights Reserved by PHERO</h5>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center container">
                    <Link className='m-2 text-white fs-3' to="/"><AiOutlineInstagram></AiOutlineInstagram></Link>
                    <Link className='m-2 text-white fs-3' to="/"> <AiOutlineFacebook></AiOutlineFacebook></Link>
                    <Link className='m-2 text-white fs-3' to="/">  <AiFillTwitterCircle></AiFillTwitterCircle></Link>



                </div>
            </div>
        </div>
    );
};

export default Footer;