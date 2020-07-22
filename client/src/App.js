import React,{useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import MyCalendar from "./pages/Calendar";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import JobSearch from "./pages/JobSearch";
import {getUserData, updateFavoritesData, deleteFavorite} from './utils/API'
import "./App.css";
import {userContext} from "./utils/userContext";
import Footer from "./components/Footer/footer";

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    getUserData().then(({data})=> {
      console.log(data)
      setUser(data)})
    .catch(err=> console.log(err))
  },[])

  const setFav = val => {
      const match = user?.Images?.filter(image => image.nasa_id==val.nasa_id);
      if (!match || match.length===0) {
        updateFavoritesData({...val, UserId:user.id});
        console.log(user.Images);
      }
  };

  const removeFav = val => {
    console.log('removing fav!')
    const match = user?.Images.filter(image => image.nasa_id===val.nasa_id);
    if (match.length>0) {
      console.log(val)
      deleteFavorite({...val, UserId:user.id});
      console.log(user.Images);
    } 
  }

  return (
    <div className="app" style={{ background: 'url("https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80") no-repeat center center',backgroundSize: "cover"}}>
    <Router>
      <userContext.Provider value={{user:user, fav:setFav, unfav:removeFav}}>
      {/* <style>{'body { background-color: #313131; }'}</style> */}
      {/* <style>{'body { background-image: url("https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80") no-repeat; }'}    </style> */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/forum">
            <Forum />
          </Route>
          <Route exact path="/calendar">
            <MyCalendar />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          {/* <Route exact path="/jobs">
            <JobSearch />
          </Route> */}
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forum/:id" component={PostPage}>
            <PostPage />
          </Route>
        </Switch>
        <Footer>Copyright 2020. Application powered by React. API's provided by NASA, SpaceX, and LinkedIn
        </Footer>

      </userContext.Provider>

    </Router>
    </div>
  );
}

export default App;
