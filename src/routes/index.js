import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Layout from '../pages/layout';
import menu from '../pages/menu'
import login from '../pages/login'
import { history } from '../history'
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={login}></Route>
                        <Route path="/" render={({ history, location, match }) => (
                            <Layout history={history} location={location} match={match}>
                                <TransitionGroup>
                                    <CSSTransition
                                        key={location.pathname}
                                        classNames="fade"
                                        timeout={800}
                                    >
                                        <div>
                                            {/* Switch 加了location={location}这个，
                                                就避免了每次路由切换时出现两个同样的组件的问题
                                                （并不太清楚原因-_-!!估计跟key有关系，可能相当于加了一个key） 
                                             */}
                                            <Switch location={location}>
                                                <Route path="/echarts" component={menu.echarts} />
                                                <Route path="/home" component={menu.home} />
                                            </Switch>
                                        </div>
                                    </CSSTransition>
                                </TransitionGroup>
                            </Layout>
                        )} />
                    </Switch>
                </Router>
            </div>
        );
    }
}