import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import layout from '../pages/layout';

export default class routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={layout} />
                {/* <Route path="/LoginPage" component={LoginPage} /> */}
                {/* <Route path="/SuccessPage" component={SuccessPage} /> */}
                {/* <Route path="/errorPage" component={errorPage} /> */}
                {/* <Route path="/*" component={errorPage} /> */}
            </Switch>
        );
    }
}