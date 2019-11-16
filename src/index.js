import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import store from './redux/store'
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import './mock';
import Routes from './routes';
import './less/index.css';

ReactDOM.render((
    <Provider store={store}>
        <TransitionGroup>
            <CSSTransition
                appear={true}
                classNames="appAppear"
                timeout={500}
            >
                <Routes />
            </CSSTransition>
        </TransitionGroup>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

