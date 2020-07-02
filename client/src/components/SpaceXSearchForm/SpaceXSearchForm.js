import React from "react";
// import "./AsteroidSearchForm.css";

function SpaceXSearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="spacex" style={{color: "white"}}>Select a SpaceX Launch:</label>
                <input
                    value={props.searchlaunch}
                    onChange={props.handleInputChangeLaunch}
                    name="searchlaunch"
                    list="launches"
                    type="text"
                    className="form-control"
                    placeholder="Type in a SpaceX launch of interest"
                    id="launch"
                />
                <datalist id="launches">
                    {props.launches.map(launch => (
                        <option value={launch.mission_name} key={launch.mission_name}/>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmitLaunch}>
                    Search
                </button>
            </div>
        </form>
    )
}

export default SpaceXSearchForm;