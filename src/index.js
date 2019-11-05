import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// eslint-disable-next-line
import { createBrowserHistory } from "history";
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import './mock';
import Routes from './routes';
import './less/index.css';

const customHistory = createBrowserHistory();

ReactDOM.render((
    <Router history={customHistory}>
        <Routes />
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();