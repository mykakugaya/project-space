import React, { useContext } from "react";
import { getUserData } from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import {userContext} from "../../utils/userContext"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    float: "left"
  },
  appbar: {
      backgroundColor: "black",
      alignItems: "center"
  },
  tabs: {
      color: "white",
      textDecoration: "none"
  },
  activeTab: {
    textDecorationColor: '#ede7f6',
    textDecorationLine: 'underline'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const {user} = useContext(userContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
          <Typography variant="h6" className={classes.title}>
           Welcome, {user?.name || "Stranger"}.
         </Typography>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton> */}
          <Tabs className={classes.appbar}>
          <Link className="navbar-brand" to="/">
            <Tab className={window.location.pathname === "/" ? classes.activeTab : classes.tabs} label="Home"/>
          </Link>
          <Link className="navbar-brand" to="/forum">
            <Tab className={window.location.pathname === "/forum" ? classes.activeTab : classes.tabs} label="Forum"/>
          </Link>
          <Link className="navbar-brand" to="/calendar">
            <Tab className={window.location.pathname === "/calendar" ? classes.activeTab : classes.tabs} label="Calendar"/>
          </Link>
          <Link className="navbar-brand" to="/gallery">
            <Tab className={window.location.pathname === "/gallery" ? classes.activeTab : classes.tabs} label="Gallery"/>
          </Link>
          <Link className="navbar-brand" to="/jobs">
            <Tab className={window.location.pathname === "/jobs" ? classes.activeTab : classes.tabs} label="Jobs"/>
          </Link>
          <Link className="navbar-brand" to="/login">
            <Tab className={window.location.pathname === "/login" ? classes.activeTab : classes.tabs} label="Login"/>
          </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};