import React, { Component } from 'react';
import './AudioControl.css';

class AudioControl extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.onClick = this.onClick.bind(this);
        this.duration = 0;
        this.state = {
            progressStyle: {
                width: "50px"
            }
        }

    }

    render() {
        return (
            <div className="AudioControl" onClick={this.onClick}>
                <div className="AudioControl-progress" style={this.state.progressStyle}>DDD</div>
                <audio className="AudioControl-innerAudio" ref={this.audioRef}>
                    <source src="http://localhost:8088/m/1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }

    componentDidMount() {

        this.audioRef.current.onloadedmetadata = (metadata) => {
            console.log(metadata);
            this.duration = metadata.srcElement.duration * 1000;
        }

        this.audioRef.current.ontimeupdate = (event) => {
            this.setState({
                progressStyle: {
                    width: 300 * (event.timeStamp / this.duration) + "px"
                }
            });
        }
    }

    onClick() {
        this.audioRef.current.play();
    }
}

export default AudioControl;