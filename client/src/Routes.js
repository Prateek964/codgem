import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Activate from './auth/Activate'
import Private from './core/Private'
import Admin from './core/Admin'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/auth/activate/:token" component={Activate} />
                <PrivateRoute exact path="/private" component={Private} />
                <AdminRoute exact path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
