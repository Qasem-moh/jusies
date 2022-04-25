import React, {Component} from 'react';
import Marquee from "react-easy-marquee";

const MerH = () => {
    const images = ['Hello', 'World', '!'];

    return (<div>
        <Marquee duration={10000} background="#fafafa" height="50px" direction="right" reverse={true}
                 pauseOnHover={true}>

            {images.map((image) => (<h2>{image}</h2>))}
        </Marquee>
    </div>);
};

export default MerH;