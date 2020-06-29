import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Calendar from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/forum">
            <Forum />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
