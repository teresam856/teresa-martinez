import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import sunflowers from '../images/plants/sunflowers.png';
import peaches from '../images/plants/peaches.png';
import orquid from '../images/plants/orquid.png';


import './Gallery.css';
import Container from 'react-bootstrap/Container';

function Gallery(props) {
    return (
        <Container className="carousel-container">
            <Carousel className="carousel-box">
                <Carousel.Item>
                    <Image className="picture" src={sunflowers} rounded />
                </Carousel.Item >
                <Carousel.Item >
                    <Image className="picture" src={peaches} rounded />
                </Carousel.Item>
                <Carousel.Item >
                    <Image className="picture" src={orquid} rounded />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Gallery;