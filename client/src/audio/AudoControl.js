import React, { Component } from 'react';
import AudioProgressBar from './AudioProgressBar';

import './AudioControl.css';

class AudioControl extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.duration = 0;
        this.state = {};
    }

    render() {
        return (
            <div className="AudioControl" onClick={this.onClick.bind(this)}>
                <AudioProgressBar className="AudioControl-progress" progress={this.state.progress}></AudioProgressBar>
                <audio className="AudioControl-innerAudio" ref={this.audioRef}>
                    <source src="http://localhost:8088/m/1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }

    componentDidMount() {

        this.audioRef.current.onloadedmetadata = (metadata) => {
            this.duration = metadata.srcElement.duration * 1000;
        }

        this.audioRef.current.ontimeupdate = (event) => {
            this.setState({
                progress:(event.timeStamp / this.duration) * 100
            });
        }
    }

    onClick() {
        if (this.audioRef.current.paused) {
            this.audioRef.current.play();
        } else {
            this.audioRef.current.pause();
        }

    }

    updateProgress(timeStamp) {
        this.setState({
            progressStyle: {
                width: (timeStamp / this.duration) * 100 + "%"
            }
        });
    }
}

export default AudioControl;