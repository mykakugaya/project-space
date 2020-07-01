import React, {Component} from "react";
import moment from "moment";
import {getAsteroid,getRover,getAPOD} from "../utils/API";
import Hero from "../components/Hero/Hero";
import MarsRoverImages from "../components/MarsRoverImages/MarsRoverImages";
import AsteroidSearchForm from "../components/AsteroidSearchForm/AsteroidSearchForm";
import AsteroidSearchResults from "../components/AsteroidSearchResults/AsteroidSearchResults";
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
        search: ""
    }

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    handleInputChange = event => {
        this.setState({ search: event.target.value})
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // getAsteroid(this.state.search)
        // .then(res => {
        //     if(res.data.status === "error"){
        //         throw new Error(res.data.message);
        //     }
        //     this.setState({ results: res.data.near_earth_objects[currentday], error: ""});
        // })
        // .catch(err => this.setState({ error: err.message}))
        const myAsteroid = this.state.asteroids.filter(item => {
            return (
                item.name === this.state.search
            )
        })
        console.log(myAsteroid)
       this.setState({results:myAsteroid})
        
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
        this.searchAsteroidAPI();
        getAsteroid()
        .then(res => {
            if(res.data.status === "error"){
                throw new Error(res.data.message);
            }
            this.setState({ asteroids: res.data.near_earth_objects[currentday], error: ""});
        })
        .catch(err => this.setState({ error: err.message}));
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

    searchAsteroidAPI = () => {
       getAsteroid()
        .then(res => 
            {
                console.log(res)
                console.log(currentday)
                console.log(res.data.near_earth_objects[currentday][0].name)
                // this.setState({
                //     asteroidName: res.data,
                //     asteroidDiameterMin: 0,
                //     asteroidDiameterMax: 0,
                //     asteroidIsDangerous: false,
                //     asteroidVelocity: 0,
                //     asteroidOrbitingBody: "",
                //     asteroidMissDistance: 0
                // })
            })
    }

    // getAsteroid = () => {

    // }

    render(){
        return (
            <div>
                {this.state.heroImage}
                <Hero backgroundImage={this.state.heroImage}>
                    <h1>The Space Hub App</h1>
                    <h2>Built for the Space Enthusiast!</h2>
                </Hero>
                <br/>
                <h2>Weather report from Mars</h2>
                <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='1000' height='622'  scrolling='no' frameborder='10'></iframe>
                <MarsRoverImages backgroundImage={this.state.marsRoverImage}>
                <h2>Browse today's photos captured by NASA's Curiosity Mars Rover</h2>
                <button onClick={this.handleNext}>Next</button>
                <button onClick={this.handlePrev}>Previous</button>
                </MarsRoverImages>
                <AsteroidSearchForm
                handleFormSubmit = {this.handleFormSubmit}
                handleInputChange = {this.handleInputChange}
                asteroids = {this.state.asteroids}
                search = {this.state.search}
                />
                {this.state.results.length>0?(
                    <AsteroidSearchResults 
                    results={this.state.results[0]}
                    search={this.state.search}
                    />
                ):(<div></div>)}
                
            </div>
        )
    }
}

export default Home;
