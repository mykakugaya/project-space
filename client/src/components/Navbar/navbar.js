import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { userContext } from "../../utils/userContext";
import { getLogout } from "../../utils/API";
import "./nav.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 3,
  },
  title: {
    flexShrink: 3,
    float: "left",
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
  link: {
    textDecoration: "none"
  },
  activeTab: {
      color: "white",
      textDecoration: "none"
  },
  padding: {
    paddingLeft: 0,
    left: 0
  },
  menuButton: {
    color: "white",
    display: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const {user} = useContext(userContext);
  const [menuHeight, setMenuHeight] = useState("10vh");
  const [expand, setExpand] = useState(0)
  const handleLogout = () =>{
    console.log("logging out");
    getLogout();
    window.location.reload();
  }

  const expandMenu = () =>{
    setMenuHeight(`${10+10*expand}vh`)
    setExpand(!expand)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} style={{height: menuHeight}}>
       
        <Toolbar className={classes.padding}>
          <Typography variant="h6" className={classes.title}>
           Welcome, {user?.name || "earthling"}.
         </Typography>
         
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon classes={{root:{backgroundColor:"white"}}}/> */}
          {/* </IconButton> */}
          <Tabs className={classes.appbar}>
              <IconButton onClick={expandMenu}>
                <Icon className={classes.menuButton} id="hamburger">
                  menu
                </Icon>
              </IconButton>
          <Link className={classes.link, "navtab"} to="/">
            <Tab className={window.location.pathname === "/" ? classes.activeTab : classes.tabs} label="Home"/>
          </Link>
          <Link className={classes.link, "navtab"} to="/forum">
            <Tab className={window.location.pathname === "/forum" ? classes.activeTab : classes.tabs} label="Forum"/>
          </Link>
          {/* <Link className="navbar-brand" to="/calendar">
            <Tab className={window.location.pathname === "/calendar" ? classes.activeTab : classes.tabs} label="Calendar"/>
          </Link> */}
          <Link className={classes.link, "navtab"} to="/gallery">
            <Tab className={window.location.pathname === "/gallery" ? classes.activeTab : classes.tabs} label="Gallery"/>
          </Link>
          <Link className={classes.link, "navtab"} to="/jobs">
            <Tab className={window.location.pathname === "/jobs" ? classes.activeTab : classes.tabs} label="Jobs"/>
          </Link>
          {user?.name ? 
          <Tab onClick={handleLogout} className={window.location.pathname === "/logout" ? classes.activeTab : classes.tabs} label="Logout"/>
          :<Link className={classes.link} to="/login"><Tab className={window.location.pathname === "/login" ? classes.activeTab : classes.tabs} label="Login"/>
          </Link>}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};