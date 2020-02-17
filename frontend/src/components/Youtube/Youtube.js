import React, { Component } from "react";


const API = 'AIzaSyBbLWOqjE8rzQKF7vp96QDCsNrIwPi13wI'
const result = 1;

export default class Youtube extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoURL: null
        }
    }

    componentDidMount() {
        var message = this.props.message
        message = message.replace("/youtube ", "");


        var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${message}&part=snippet&type=video&maxResults=${result}`
        fetch(finalURL)
            .then(res => res.json())
            .then((responseJson) => {
                const videoURL = 'https://www.youtube.com/embed/' + responseJson.items[0].id.videoId
                this.setState({
                    videoURL
                })
            }
            )
    }

    render() {
        
        return (

            <div>
                {this.state.videoURL &&
                    <iframe
                        title='video'
                        width='200'
                        height='200'
                        src={this.state.videoURL}
                        frameBorder='0'>

                    </iframe>
                }
            </div>

        );
    }

}