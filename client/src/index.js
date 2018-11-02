import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './Theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
