import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
// import Forum from "./pages/Forum";
import MyCalendar from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
// import JobSearch from "./pages/JobSearch";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <style>{'body { background-color: #313131; }'}</style> */}
      <style>{'body { background-image: url("https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80"); }'}</style>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/forum">
            {/* <Forum /> */}
          </Route>
          <Route exact path="/calendar">
            <MyCalendar />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/jobs">
            {/* <JobSearch /> */}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
