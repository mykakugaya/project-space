import React, {Component} from "react";
import moment from "moment";
import {getAsteroid,getRover,getAPOD, getSpaceXLaunch} from "../utils/API";
import Hero from "../components/Hero/Hero";
import MarsRoverImages from "../components/MarsRoverImages/MarsRoverImages";
import AsteroidSearchForm from "../components/AsteroidSearchForm/AsteroidSearchForm";
import AsteroidSearchResults from "../components/AsteroidSearchResults/AsteroidSearchResults";
import SpaceXSearchResults from "../components/SpaceXSearchResults/SpaceXSearchResults";
import SpaceXSearchForm from "../components/SpaceXSearchForm/SpaceXSearchForm";
import Footer from "../components/Footer/footer";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./Home.css"
const currentday = moment().format("YYYY-MM-DD");

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
                    <Grid item xs={12} sm={6} md={6} lg={6} className="about">
                        <h2>Welcome to The Space Hub!</h2>
                        <p>This application was developed for all Space Enthusiasts! Built with the passion of true space nerds, this site features several API's from NASA and SpaceX. We are pleased to provide a unique and immersive environment where users can re-ignite their love for all things outer-space!</p>
                        <ul><strong>Widgets featured on this page include...</strong>
                        <br></br>
                            <li>NASA's Astronomy Picture of the Day; updated daily (see hero image above)</li>
                            <li>A Mars weather report; updated bi-weekly</li>
                            <li>Asteroid tracker listing various properties of the asteroids nearest to Earth; updated daily</li>
                            <li>Gallery of photos taken on Mars by NASA's Curiosity rover; updated daily </li>
                            <li>SpaceX launch data; view detailed info on each of SpaceX's rocket launches!</li>
                        </ul>
                        <p>In addition, this site features login functionality, a forum for enthusiasts to post and respond to topics of discussion, an image gallery, and a job posting section that pulls jobs from LinkedIn's job search API, and a calendar for tracking major space-related events!</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Grid direction="row" justify="center" alignItems="center" className="aboutus">
                            <h2>Meet the Developers - Links to Portfolio's included!</h2>
                            <Grid  container className="profilePadding" style={{ width: '100%' }}>
                                <Grid item xs={4}>
                                    <a href="https://abazrafshan.github.io/Responsive-Portfolio/">
                                        <img className="profilePicArash" src={require("../Pics/arashprofile.jpg")}/>
                                        <p style = {{textAlign: "center", paddingRight:"20%"}}><strong>Arash Bazrafshan</strong></p>
                                    </a>
                                </Grid>
                                <Grid item xs={4}>
                                    <a href="https://github.com/mykakugaya">
                                        <img className="profilePic" src={require("../Pics/mykaprofile.jpg")}/>
                                        <p style = {{textAlign: "center", paddingRight:"10%"}}><strong>Myka Kugaya</strong></p>
                                    </a>
                                </Grid>
                                <Grid item xs={4}>
                                    <a href="https://github.com/sharlenemay">
                                        <img className="profilePic" src={require("../Pics/sharleneprofile.jpg")}/>
                                        <p style = {{textAlign: "center", paddingRight:"10%"}}><strong>Sharlene May</strong></p>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} className="weatherReport">
                        <h2>Mars weather report</h2>
                        <div className="iframe-container">
                            <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/'  scrolling='no' frameborder='1'></iframe>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} justify="flex-start" alignItems="center" align="left" className="asteroidTable">
                        <h2>View properties of nearby Asteroids</h2>
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
                    <Grid item xs={12} sm={5} md={5} lg={5} className="roverPhotos">
                        <h2>Browse yesterday's photos from Mars captured by NASA's Curiosity rover</h2>
                        <MarsRoverImages backgroundImage={this.state.marsRoverImage} style={{height: "100px"}} >
                            <Button onClick={this.handleNext} variant="contained" color="primary">Next</Button>
                            <Button onClick={this.handlePrev} variant="contained" color="secondary">Previous</Button>
                            <p style={{height: "22.5em"}}></p>
                        </MarsRoverImages>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} lg={7} className="spaceXTable" justify="flex-start" alignItems="center" align="left">
                        <h2>View details of past SpaceX rocket launches</h2>
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

export default Home;
