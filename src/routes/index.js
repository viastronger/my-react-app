import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import layout from '../pages/layout';
import menu from '../pages/menu'
import { history } from '../history'

export default class routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={layout} >
                        <Route path="/route3" component={menu.echarts} />
                    </Route>
                    {/* <Route path="/LoginPage" component={LoginPage} /> */}
                    {/* <Route path="/SuccessPage" component={SuccessPage} /> */}
                    {/* <Route path="/errorPage" component={errorPage} /> */}
                    {/* <Route path="/*" component={errorPage} /> */}
                </Switch>
            </Router>
        );
    }
}