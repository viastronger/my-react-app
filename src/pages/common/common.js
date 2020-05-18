import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import detail from '../detail/detail'

class Common extends React.Component {
    render() {
        return (
            <div>
                <div>asdfasdjf</div>
                <Switch>
                    <Route path="/common/order/detail/:id" component={detail} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, null)(Common)
