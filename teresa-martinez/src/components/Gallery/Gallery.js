import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import stockton from '../../images/cities/stockton.png'
import sunflowers from '../../images/sunflowers.png';
import sunset from '../../images/sunset.png';
import dc3 from '../../images/cities/dc3.png';
import sf from '../../images/cities/sf.png';
import ny  from '../../images/cities/ny.png'



import './Gallery.css';


function Gallery(props) {
    return (
        <Container className="carousel-container ">
            <Carousel className="carousel-box">
                <Carousel.Item>
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunflowers} />
                </Carousel.Item >
                <Carousel.Item >
                    <Image className="img-responsive center-block" width={400} height={400} src={sf}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={dc3}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunset}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={ny}/>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Gallery;