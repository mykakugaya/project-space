import React from "react";
// import "./AsteroidSearchForm.css";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     padding: {
//       padding: "5%"
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "left",
//       color: theme.palette.text.secondary,
//     },
//     root: {
//       backgroundColor: "#424242",
//     },
//     text: {
//       width: "100ch",
//       padding: "5px"
//     },
//     form: {
//         alignContent: "center"
//     },
//     button: {
//         padding: "5px"
//     }
//   }));

//   const classes = useStyles();

function AsteroidSearchForm(props){
    return(
        <form className="search">
            <div className="form-group">
                <label htmlFor="asteroid" style={{color: "white"}}>Select an Asteroid:</label>
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