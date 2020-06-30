import React from "react";
import "./MarsRoverImages.css";

function MarsRoverImages(props) {
    return (
        <div className= "MarsRoverImages" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            {props.children}
        </div>
    );
}

export default MarsRoverImages;