import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import sunflowers from '../images/plants/sunflowers.png';
import peaches from '../images/plants/peaches.png';
import orquid from '../images/plants/orquid.png';


import './Gallery.css';

function Gallery(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sunflowers}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={peaches}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={orquid}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Gallery;