import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    margin: "0 auto",
    marginBottom: "40px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white",
  },
  input: {
    margin: `${theme.spacing(1)}px auto`,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
//create searchbar as well as existing forum categories select
export default function ForumSearch(props) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Grid container justify="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={props.handleFilteredPosts}
                  label="Search Posts by Category"
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Earth"}>Earth</MenuItem>
                  <MenuItem value={"Solar System"}>Solar System</MenuItem>
                  <MenuItem value={"NASA"}>NASA</MenuItem>
                  <MenuItem value={"SpaceX Launches"}>SpaceX Launches</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12}>
              <InputBase
                className={classes.input}
                placeholder="Search Forums"
                inputProps={{ "aria-label": "search forums" }}
                onChange={props.handleInputChange}
              />
              <IconButton
                type="button"
                className={classes.iconButton}
                aria-label="search"
                onClick={() => props.handleFormSubmit}
              >
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
