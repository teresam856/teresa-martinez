import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import berkeley3 from '../../images/cities/berkeley3.png';
import sunflowers from '../../images/sunflowers.png';
import sunset from '../../images/sunset.png';
import sf from '../../images/cities/sf.png';
import ny  from '../../images/cities/ny.png';
import washington_mall  from '../../images/cities/wmall.png'


// hi
import './Gallery.css';


function Gallery(props) {
    const [indx, setIndx] = useState(0);
    const handleSelect = (selectedIndx, e) => {
        setIndx(selectedIndx)
    };
    return (
        <Container>
            <Carousel activeIndex={indx} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunflowers} />
                </Carousel.Item >
                <Carousel.Item >
                    <Image className="img-responsive center-block" width={400} height={400} src={sf}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={sunset}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={washington_mall}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={berkeley3}/>
                </Carousel.Item>
                <Carousel.Item >
                    <Image  className="img-responsive center-block" width={400} height={400} src={ny}/>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Gallery;