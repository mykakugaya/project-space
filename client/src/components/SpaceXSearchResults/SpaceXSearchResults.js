import React from "react";
// import "./SpaceXLaunchResults.css";

function SpaceXLaunchResults(props){
    return(
        <div>
        <br></br>
        <table>
            <tr>
                <th colspan="2"><strong>SpaceX Launch Info</strong></th>
            </tr>
            <tr>
                <td>Mission Name and Date</td>
                <td>{props.results.mission_name} (flight number {props.results.flight_number}) launched in {props.results.launch_year}</td>
            </tr>
            <tr>
                <td>Launch Details</td>
                <td>{props.results.details}</td>
            </tr>
            <tr>
                <td>Successful?</td>
                <td>{props.results.launch_success}</td>
            </tr>
            {/* <tr>
                <td>Rocket Name</td>
                <td>{props.results.rocket[first_stage].rocket_name}</td>
            </tr> */}
        </table>
        </div>
    )
}

export default SpaceXLaunchResults;