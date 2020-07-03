import React, {Component} from "react";
import moment from "moment";
import {getAsteroid,getRover,getAPOD, getSpaceXLaunch} from "../utils/API";
import Hero from "../components/Hero/Hero";
import MarsRoverImages from "../components/MarsRoverImages/MarsRoverImages";
import AsteroidSearchForm from "../components/AsteroidSearchForm/AsteroidSearchForm";
import AsteroidSearchResults from "../components/AsteroidSearchResults/AsteroidSearchResults";
import SpaceXSearchResults from "../components/SpaceXSearchResults/SpaceXSearchResults";
import SpaceXSearchForm from "../components/SpaceXSearchForm/SpaceXSearchForm";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from "@material-ui/core";
import "./Home.css"
const currentday = moment().format("YYYY-MM-DD");
// const classes = withStyles((theme) => ({
//     padding: {
//       padding: "5%"
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: "left",
//       color: theme.palette.text.secondary,
//     },
//     root: {
//       backgroundColor: "#424242",
//     },
//     text: {
//       width: "100ch",
//       padding: "5px"
//     },
//     form: {
//         alignContent: "center"
//     },
//     button: {
//         padding: "5px"
//     }
//   }));


class Home extends Component {
    state={
        heroImage: "",
        marsRoverImage: "",
        photoIndex: 0,
        asteroidName: "",
        asteroidDiameterMin: 0,
        asteroidDiameterMax: 0,
        asteroidIsDangerous: false,
        asteroidVelocity: 0,
        asteroidOrbitingBody: "",
        asteroidMissDistance: 0,
        results: [],
        asteroids: [],
        search: "",
        launches: [],
        searchlaunch: "",
        launchResults: []
    }

    

    handleInputChange = event => {
        console.log(event.target)
        this.setState({ search: event.target.value})
    };

    handleInputChangeLaunch = event => {
        console.log(event.target.value)
        this.setState({ searchlaunch: event.target.value})
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const myAsteroid = this.state.asteroids.filter(item => {
            return (
                item.name === this.state.search
            )
        })
        console.log(myAsteroid)
       this.setState({results:myAsteroid})
    };

    handleFormSubmitLaunch = event => {
        event.preventDefault();
       console.log(this.state.searchlaunch)
        const myLaunch = this.state.launches.filter(item => {
            return (
                item.mission_name === this.state.searchlaunch
            )
        })
        console.log(myLaunch)
        this.setState({launchResults: myLaunch})
    };

    handleNext = () => {
        if(this.state.photoIndex === 24){
            this.setState({photoIndex: 0})
            this.searchMarsRover();
        } else {
            this.setState({photoIndex: this.state.photoIndex + 1});
            this.searchMarsRover();
        }
    }

    handlePrev = () => {
        if(this.state.photoIndex === 0){
            this.setState({photoIndex: 24})
            this.searchMarsRover();
        } else {
            this.setState({photoIndex: this.state.photoIndex - 1});
            this.searchMarsRover();
        }
    }

    componentDidMount =() => {
        this.searchAPOD();
        this.searchMarsRover();
        getAsteroid()
        .then(res => {
            if(res.data.status === "error"){
                throw new Error(res.data.message);
            }
            this.setState({ asteroids: res.data.near_earth_objects[currentday], error: ""});
        })
        .catch(err => this.setState({ error: err.message}));

        getSpaceXLaunch()
        .then(res => {
            if(res.data.status === "error"){
                throw new Error(res.data.message);
            }
            console.log(res);
            this.setState({launches: res.data, error: ""});
        });
    };

    searchAPOD = () => {
       getAPOD()
        .then(res =>
            {
                console.log(res)
                if(res.data.media_type === "video"){
                    this.setState({heroImage: "https://miro.medium.com/max/1400/1*9IIoxOcIbhMFFKMCI2ncuQ.jpeg"})
                } else {
                this.setState({heroImage: (res.data.hdurl || res.data.url)})}
            } )
        .catch(err => console.log(err));
    };

    searchMarsRover = () => {
        getRover()
        .then(res => 
            {
                console.log(res)
                this.setState({marsRoverImage: res.data.photos[this.state.photoIndex].img_src})
            })
        .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                <Hero backgroundImage={this.state.heroImage}>
                    <h1>The Space Hub</h1>
                    <h2>Built for the Space Enthusiast!</h2>
                </Hero>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={8} className="asteroidTable">
                        <h2 style={{color:"white"}}>Weather report from Mars</h2>
                        <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
                    </Grid>
                    <Grid item xs={4} justify="flex-start" alignItems="center" align="left" className="asteroidTable">
                        <AsteroidSearchForm
                            handleFormSubmit = {this.handleFormSubmit}
                            handleInputChange = {this.handleInputChange}
                            asteroids = {this.state.asteroids}
                            search = {this.state.search}
                        />
                        {this.state.results.length> 0 ? (
                            <AsteroidSearchResults 
                            results={this.state.results[0]}
                            search={this.state.search}
                        />
                        ) : (<div></div>)}
                    </Grid>
                    
                    <br></br>
                    <Grid item xs={4}>
                        <h2 style={{color: "white", textAlign: "center"}}>Browse today's photos captured by NASA's Curiosity Mars Rover</h2>
                        <MarsRoverImages backgroundImage={this.state.marsRoverImage} style={{textAlign: "center"}}>
                            <Button onClick={this.handleNext} variant="contained" color="primary">Next</Button>
                            <Button onClick={this.handlePrev} variant="contained" color="secondary">Previous</Button>
                        </MarsRoverImages>
                    </Grid>
                    <Grid item xs={8} className="spaceXTable">
                        <SpaceXSearchForm
                            handleFormSubmitLaunch = {this.handleFormSubmitLaunch}
                            handleInputChangeLaunch = {this.handleInputChangeLaunch}
                            launches = {this.state.launches}
                            search = {this.state.searchlaunch}
                        />
                        {this.state.launchResults.length> 0 ? (
                            <SpaceXSearchResults 
                            results={this.state.launchResults[0]}
                            searchlaunch={this.state.searchlaunch}
                        />
                        ) : (<div></div>)}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
//export default withStyles(classes)(Home);
export default Home;
