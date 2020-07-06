import React from "react";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
      textAlign: "center",
      fontFamily: "Playfair Display SC",
      fontSize: "70px",
      color: "white",
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "left",
      color: theme.palette.text.secondary,
      marginLeft: "10px"
    },
    text: {
      width: "100ch",
      padding: "5px"
    },
    form: {
        alignContent: "center"
    },
    button: {
        padding: "5px"
    },
  }));

function JobForm(props) {
    const classes=useStyles();
    
    return (
        <Paper className={classes.paper}>
            <h3>Search jobs:</h3>
            <form noValidate autoComplete="off">
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Grid item xs={12}>
                    <TextField id="job-title" label="Job Title" onChange={props.handleTitleChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="postal-code" label="Postal Code" onChange={props.handlePostChange}/>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel id="distance">Distance</InputLabel>
                        <Select
                        labelId="distance"
                        id="distance"
                        value={props.distance}
                        onChange={props.handleDistChange}
                        >
                        <MenuItem value={10}>10 miles</MenuItem>
                        <MenuItem value={20}>20 miles</MenuItem>
                        <MenuItem value={30}>30 miles</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default JobForm;