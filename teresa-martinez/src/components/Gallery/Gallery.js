import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


import sunset from '../../images/plants/sunset.png';
import sunflowers from '../../images/plants/sunflowers.png';
import peaches from '../../images/plants/peaches.png';
import orquid from '../../images/plants/orquid.png';


import './Gallery.css';


function Gallery(props) {
    return (
        <Container className="carousel-container ">
            <Carousel className="carousel-box">
                <Carousel.Item>
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunflowers} />
                </Carousel.Item >
                <Carousel.Item >
                    <Image className="img-responsive center-block" width={400} height={400} src={peaches}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={orquid}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunset}/>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Gallery;