import React from "react";
import "./AsteroidSearchResults.css";

function AsteroidSearchResults(props){
    return(
        <div>
        <br></br>
        <table>
            <tr>
                <th colspan="2"><strong>Asteroid Properties</strong></th>
            </tr>
            <tr>
                <td>Asteroid Name</td>
                <td>{props.results.name}</td>
            </tr>
            <tr>
                <td>Orbiting Body</td>
                <td>{props.results.close_approach_data[0].orbiting_body}</td>
            </tr>
            <tr>
                <td>Dangerous to Life on Earth?</td>
                <td>{props.results.is_potentially_hazardous_asteroid.toString()}</td>
            </tr>
            <tr>
                <td>Will Miss Earth by...</td>
                <td>{parseInt(props.results.close_approach_data[0].miss_distance.miles).toLocaleString()} miles</td>
            </tr>
            <tr>
                <td>Relative Velocity </td>
                <td>{parseInt(props.results.close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString()} mph</td>
            </tr>
            <tr>
                <td>Minimum Diameter</td>
                <td>{props.results.estimated_diameter.feet.estimated_diameter_min.toFixed(0).toLocaleString()} feet</td>
            </tr>
            <tr>
                <td>Maximum Diameter</td>
                <td>{props.results.estimated_diameter.feet.estimated_diameter_max.toFixed(0).toLocaleString()} feet</td>
            </tr>
        </table>
        </div>
    )
}

export default AsteroidSearchResults;