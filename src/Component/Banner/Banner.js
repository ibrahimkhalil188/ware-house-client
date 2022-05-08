import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Asset/Banner/banner1.jpg'
import banner2 from '../../Asset/Banner/banner2.jpg'
import banner3 from '../../Asset/Banner/banner3.jpg'
const Banner = () => {
    return (
        <div >
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100" style={{ height: "90vh" }}
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 "
                        style={{ height: "90vh" }}
                        src={banner3}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "90vh" }}
                        src={banner1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;