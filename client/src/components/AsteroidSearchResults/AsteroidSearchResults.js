import React from "react";
// import AsteroidSearchResults from "./AsteroidSearchResults.css";

function AsteroidSearchResults(props){
    return(
        <div>
        <ul>
            {props.results.map(result => (
                <li key = {result} className="list-group-item">
                    <h3>{result}</h3>
                    <h3></h3>
                    <h3></h3>
                    <h3></h3>
                    <h3></h3>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default AsteroidSearchResults;