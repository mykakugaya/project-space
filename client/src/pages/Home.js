import React, {Component} from "react";
import API from "../utils/API";
import Hero from "../components/Hero/Hero";
import MarsRoverAPI from "../utils/MarsRoverAPI";
import MarsRoverImages from "../components/MarsRoverImages/MarsRoverImages"
import AsteroidSearchForm from "../components/AsteroidSearchForm/AsteroidSearchForm"
import AsteroidAPI from "../utils/AsteroidAPI"



class Home extends Component {
    state={
        heroImage: "",
        MarsRoverImage: "",
        photoIndex: 0
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleNext = event => {
        
        if(this.state.photoIndex === 24){
            this.setState({photoIndex: 0})
            this.searchMarsRover();
        } else {
            this.setState({photoIndex: this.state.photoIndex + 1});
            this.searchMarsRover();
        }
    }

    handlePrev = event => {
        if(this.state.photoIndex === 0){
            this.setState({photoIndex: 24})
            this.searchMarsRover();
        } else {
            this.setState({photoIndex: this.state.photoIndex - 1});
            this.searchMarsRover();
        }
    }

    componentDidMount(){
        this.searchAPOD();
        this.searchMarsRover();
        this.searchAsteroidAPI();
    };

    searchAPOD = () => {
        API.APODapisearch()
        .then(res =>
            {
                console.log(res)
                this.setState({heroImage: res.data.hdurl})
            } )
        .catch(err => console.log(err));
    };

    searchMarsRover(){
        MarsRoverAPI.MARSROVERapiSearch()
        .then(res => 
            {
                console.log(res)
                this.setState({MarsRoverImage: res.data.photos[this.state.photoIndex].img_src})
            })
        .catch(err => console.log(err));
    };

    searchAsteroidAPI = () => {
        AsteroidAPI.ASTEROIDapisearch()
        .then(res => 
            {
                console.log(res)
            })
    }

    render(){
        return (
            <div>
                <Hero backgroundImage={this.state.heroImage}>
                    <h1>The Space Hub App</h1>
                    <h2>Built for the Space Enthusiast!</h2>
                </Hero>
                <br/>
                <h2>Weather forecast from Mars</h2>
                <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='1000' height='622'  scrolling='no' frameborder='10'></iframe>
                <MarsRoverImages backgroundImage={this.state.MarsRoverImage}>
                <h2>Browse today's photos taken by NASA's Curiosity Mars Rover</h2>
                    {/* <h3>Built for the Space Enthusiast!</h3> */}
                <button onClick={this.handleNext}>Next</button>
                <button onClick={this.handlePrev}>Previous</button>
                </MarsRoverImages>

            </div>
        )
    }
}

export default Home;
