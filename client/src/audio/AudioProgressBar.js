import React, { Component } from 'react';
import './AudioProgressBar.css';

class AudioProgressBar extends Component {
    constructor(props) {
        super(props);
        this.grabbingHandle = false;
        this.handleDownX = 0;
        this.windowDownX = 0;
        this.handleDragX = 0;
        this.state = {};
        this.rootElement = React.createRef();
        window.onmousemove = this.onMouseMove.bind(this);
        window.onmouseup = this.onMouseUp.bind(this);
    }

    render() {
        let width = this.props.progress + "%"; 
        if(this.grabbingHandle){
            width = this.handleDragX + "px";
        }
        let progressStyle = {
            width: width
        }

        console.log(width);
        return (
            <div className="AudioProgressBar" ref={this.rootElement}>
                <div className="AudioProgressBar-progress" style={progressStyle}>
                    <span className="AudioProgressBar-handle" 
                        onMouseDown={this.onHandleMouseDown.bind(this)}>
                    </span> 
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.rootElementPixelWidth = this.rootElement.current.offsetWidth;
    }

    onMouseUp(event) {
        console.log("UP");
        this.grabbingHandle = false;
    }

    onHandleMouseDown(event) {
        console.log("DOWN");
        this.grabbingHandle = true;
        this.windowDownX = event.clientX;
    }

    onMouseMove(event) {
        if(this.grabbingHandle){
            this.handleDragX = Math.min(this.handleDownX + (event.clientX - this.windowDownX), this.rootElementPixelWidth);
            this.forceUpdate();            
        }
    }
}

export default AudioProgressBar;    