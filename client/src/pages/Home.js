import React, {Component} from "react";
import API from "../utils/API";
import Hero from "../components/Hero/Hero";


class Home extends Component {
    state={
        heroImage: ""
    }

    componentDidMount(){
        this.searchAPOD()
    };

    searchAPOD() {
        API.APODapisearch()
        .then(res => this.setState({heroImage: res.data.hdurl}))
        .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                <Hero backgroundImage={this.state.heroImage}>
                    <h1>The Space Hub App</h1>
                    <h3>Built for the Space Enthusiast!</h3>
                </Hero>
            </div>
        )
    }
}

export default Home;
