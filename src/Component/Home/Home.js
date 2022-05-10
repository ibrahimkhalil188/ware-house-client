import React from 'react';
import Banner from '../Banner/Banner';
import BestOffer from '../BestOffer/BestOffer';
import Newslater from '../Newslater/Newslater';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BestOffer></BestOffer>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;