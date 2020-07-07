import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { postLogin, postSignup, getUsers } from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { userContext } from "../utils/userContext";

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
    margin: "5%"
  },
  login: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  p: {
    color: "black"
  }
}));

export default function CenteredGrid() {

  const {user} = useContext(userContext);
  
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [users, setUsers] = useState([]);

  const validateLogin = () => {
    return email.length > 0 && password.length > 0;
  }

  const validateSignup = () => {
      return newEmail.length > 0 && newPassword.length > 0;
  }

  const handleLogin = event => {
      event.preventDefault();
      postLogin( {
          email: email,
          password: password
      })
      .then( () => {
          console.log("Logged in!");
          window.location.replace("/");
      })
      .catch ( () => setPasswordError("Incorrect email or password. Please try again."));
  };

  const handleCreateUser = event => {
      event.preventDefault();
      getUsers()
          .then(
          response => setUsers(response.data))
          users.map(user => {
            if (user.email = newEmail){
              setError("Email already in use. Please log in.")
            }
          })

            postSignup( {
                name: name,
                email: newEmail,
                password: newPassword
            })

            .then ( () => {
                console.log(`New User signed up: ${name}`);
                postLogin( {
                    email: newEmail,
                    password: newPassword
                });
                window.location.replace("/");
            })

            .catch ( err => console.log(err));
  };

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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <br />
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <br />
                <Button 
                  variant="contained" 
                  color="primary" 
                  disableElevation disabled={!validateLogin()}
                  onClick={handleLogin}
                >Log In
                </Button>
              </form>
              <p className={classes.p}>{passwordError ? passwordError : ""}</p>
            </Grid>
            <Grid item xs={6}>
              or Create an Account:
              <form className={classes.login} noValidate autoComplete="off">
                <TextField
                  type="text"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                />
                <br />
                <TextField
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                />
                <br />
                <Button 
                  variant="contained" 
                  color="primary" 
                  disableElevation disabled={!validateSignup()}
                  onClick={handleCreateUser}
                >Create User
                </Button>
                <p className={classes.p}>{error ? error : ""}</p>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
