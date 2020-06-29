import React from "react";
// import { Link } from "react-router-dom";
import { Paper, Tab, Tabs } from "@material-ui/core";

function Navbar() {
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" >
            {/* <Link className="navbar-brand" to="/"/> */}
        </Tab>
        <Tab label="Forum" >
            {/* <Link className="navbar-brand" to="/forum"/> */}
        </Tab>
        <Tab label="Calendar" >
            {/* <Link className="navbar-brand" to="/calendar"/> */}
        </Tab>
        <Tab label="Gallery" >
            {/* <Link className="navbar-brand" to="/gallery"/> */}
        </Tab>
        <Tab label="Jobs" >
            {/* <Link className="navbar-brand" to="/jobs"/> */}
        </Tab>
      </Tabs>
    </Paper>
  );
}

export default Navbar;
