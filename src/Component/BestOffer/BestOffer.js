import React from 'react';
import { GiOpenChest } from 'react-icons/gi'
const BestOffer = () => {

    return (
        <div className='text-center m-5'>
            <h1 className='text-white m-5'>Our Services</h1>
            <div className=" d-flex justify-content-around">
                <div className="d-flex bg-light p-3 justify-content-around align-items-center border border-3 border-primary">
                    <div>
                        <h4>Packaging ans Storage</h4>
                        <p>We can package and store your product</p>
                    </div>
                    <span className='fs-2 mx-2 text-primary'><GiOpenChest></GiOpenChest></span>
                </div>
                <div className="d-flex bg-light p-3 justify-content-around align-items-center border border-3 border-primary">
                    <div>
                        <h4>Cargo</h4>
                        <p>We can package and store your product</p>
                    </div>
                    <span className='fs-2 text-primary mx-2'><GiOpenChest></GiOpenChest></span>
                </div>
                <div className="d-flex bg-light p-3 justify-content-around align-items-center border border-3 border-primary">
                    <div>
                        <h4>Warehouse</h4>
                        <p>We can package and store your product</p>
                    </div>
                    <span className='fs-2 text-primary mx-2'><GiOpenChest></GiOpenChest></span>
                </div>

            </div>
        </div>
    );
};

export default BestOffer;