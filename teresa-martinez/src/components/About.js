import React from 'react';

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';


function About(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Gallery />
            
        </div>
    );
}
export default About;