import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: "black",
      alignItems: "center"
  },
  tabs: {
      color: "white",
      textDecoration: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            Project Space
          </Typography> */} 
          <Tabs className={classes.appbar}>
          <Link className="navbar-brand" to="/">
            <Tab className={classes.tabs} label="Home"/>
          </Link>
          <Link className="navbar-brand" to="/forum">
            <Tab className={classes.tabs} label="Forum"/>
          </Link>
          <Link className="navbar-brand" to="/calendar">
            <Tab className={classes.tabs} label="Calendar"/>
          </Link>
          <Link className="navbar-brand" to="/gallery">
            <Tab className={classes.tabs} label="Gallery"/>
          </Link>
          <Link className="navbar-brand" to="/jobs">
            <Tab className={classes.tabs} label="Jobs"/>
          </Link>
          <Link className="navbar-brand" to="/login">
            <Tab className={classes.tabs} label="Login"/>
          </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};