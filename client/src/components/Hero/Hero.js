import React from "react";
import "./Hero.css"

function Hero(props){
    return(
        <div className="hero" style ={{backgroundImage: `url(${props.backgroundImage})`}}>
            {props.children}
        </div>
    )
}

export default Hero;