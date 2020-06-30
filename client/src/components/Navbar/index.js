import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
            <Tab label="Home">
              <Link className="navbar-brand" to="/" />
            </Tab>
            <Tab label="Forum">
              <Link className="navbar-brand" to="/forum" />
            </Tab>
            <Tab label="Calendar">
              <Link className="navbar-brand" to="/calendar" />
            </Tab>
            <Tab label="Gallery">
              <Link className="navbar-brand" to="/gallery" />
            </Tab>
            <Tab label="Jobs">
              <Link className="navbar-brand" to="/jobs" />
            </Tab>
            <Tab label="Login">
              <Link className="navbar-brand" to="/login" />
            </Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}