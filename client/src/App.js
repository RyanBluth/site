import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AudioControl from './audio/AudoControl'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button variant="contained" color="primary">Hello World</Button>
                <br/>
                <br/>
                <AudioControl/>
            </div>
        );
    }
}

export default App;
