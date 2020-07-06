import React from "react";

function AsteroidSearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="asteroid" style={{color: "white"}}>Select an Asteroid </label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    list="asteroids"
                    type="text"
                    className="form-control"
                    placeholder="Type in an asteroid of interest"
                    id="asteroid"
                />
                <datalist id="asteroids">
                    {props.asteroids.map(asteroid => (
                        <option value={asteroid.name} key={asteroid.name}/>
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