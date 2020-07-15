import React from 'react';

import Hero from '../components/Hero';


function Resume(props) {
    return (
        <div >
            <Hero title={props.title} subtitle={props.subtitle}/>
        </div>
    );
}
export default Resume;