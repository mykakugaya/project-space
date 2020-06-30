import React, {Component} from "react";
import API from "../utils/API";
import Hero from "../components/Hero/Hero";
import MarsRoverAPI from "../utils/MarsRoverAPI";



class Home extends Component {
    state={
        heroImage: "",
        MarsRoverImage: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    componentDidMount(){
        this.searchAPOD();
        this.searchMarsRover();
    };

    searchAPOD() {
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
                this.setState({MarsRoverImage: res.data.photos.img_src})
            })
        .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                <Hero backgroundImage={this.state.heroImage}>
                    <h1>The Space Hub App</h1>
                    <h3>Built for the Space Enthusiast!</h3>
                </Hero>
                <br/>
                <h2>Weather forecast from Mars</h2>
                <iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameborder='0'></iframe>
            </div>
        )
    }
}

export default Home;
