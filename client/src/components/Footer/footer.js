import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {userContext} from "../../utils/userContext"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    bottom: 0
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
  },
  activeTab: {
    textDecorationColor: '#ede7f6',
    textDecorationLine: 'underline'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const {user} = useContext(userContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
          <Typography variant="h6" className={classes.title}>
           Footer
         </Typography>
      </AppBar>
    </div>
  );
};