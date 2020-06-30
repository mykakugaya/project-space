import React from "react";
import "./AsteroidSearchForm.css";

function AsteroidSearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="asteroid">Select an Asteroid:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="asteroid"
                    list="asteroids"
                    type="text"
                    className="form-control"
                    placeholder="Type in an asteroid of interest"
                    id="asteroid"
                />
                <datalist id="asteroids">
                    {props.breeds.map(asteroid => (
                        <option value={asteroid} key={asteroid}/>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit}>
                    Search
                </button>
            </div>
        </form>
    )
}

export default AsteroidSearchForm;