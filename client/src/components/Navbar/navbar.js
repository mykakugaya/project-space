import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";
import { userContext } from "../../utils/userContext"
import { getLogout } from "../../utils/API"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    float: "left",
    marginRight: "50px",
    marginLeft: 0
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
      color: "white",
      textDecoration: "none"
  },
  padding: {
    paddingLeft: 0,
    left: 0
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const {user} = useContext(userContext);

  const handleLogout = () =>{
    console.log("logging out");
    getLogout();
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.padding}>
          <Typography variant="h6" className={classes.title}>
           Welcome, {user?.name || "Stranger"}.
         </Typography>
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
          {user?.name ? 
          <Tab onClick={handleLogout} className={window.location.pathname === "/logout" ? classes.activeTab : classes.tabs} label="Logout"/>
          :<Link className="navbar-brand" to="/login"><Tab className={window.location.pathname === "/login" ? classes.activeTab : classes.tabs} label="Login"/>
          </Link>}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};