import React, { Component} from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Layout from '../pages/layout';
import menu from '../pages/menu'
import { history } from '../history'

export default class routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" render={props => (
                        <Layout>
                            <Switch>
                                <Route path="/echarts" exact component={menu.echarts} />
                                {/* <Route path="/" exact component={lazyLoad(Home)} />
                                        <Route path="/home" component={lazyLoad(Home)} />
                                        <Route path="/test" component={lazyLoad(Test)} /> */}
                                {/* <Route path="/" exact component={Home} /> */}
                                {/* <Route path="/route3" component={Home} /> */}
                                {/* <Route path="/test" component={Test} /> */}
                                {/* <Route render={() => <Redirect to="/" />} /> */}
                            </Switch>
                        </Layout>
                    )}
                    />
                    {/* <Route render={() => <Redirect to="/" />} /> */}
                    {/* <layout>
                        <Route path="/" exact component={layout} />
                        <Route path="/route3" component={menu.echarts} />
                    </layout> */}
                    {/* <Route path="/login" component={base.login} /> */}
                    {/* <Route path="*" component={base.notfound} /> */}
                    {/* <Route path="/LoginPage" component={LoginPage} /> */}
                    {/* <Route path="/SuccessPage" component={SuccessPage} /> */}
                    {/* <Route path="/errorPage" component={errorPage} /> */}
                    {/* <Route path="/*" component={errorPage} /> */}
                </Switch>
            </Router>
        );
    }
}