import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { postLogin, getUsers, postSignup } from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // '& > *': {
    //     margin: theme.spacing(1),
    //     width: '100ch',
    //   },
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  login: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (email,password) => {
    
  }

  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              Login:
              <form className={classes.login} noValidate autoComplete="off">
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
                <br />
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <br />
                <Button variant="contained" color="primary" disableElevation>
                  Log In
                </Button>
              </form>
            </Grid>
            <Grid item xs={6}>
              or Create an Account:
              <form className={classes.login} noValidate autoComplete="off">
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <br />
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
                <br />
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
                <br />
                <Button variant="contained" color="primary" disableElevation>
                  Create User
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
