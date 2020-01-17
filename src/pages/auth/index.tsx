import React from 'react';
import {Route, Switch,} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default class Auth extends React.Component {

    render() {

        console.log('auth');
        return (
            <Switch>
                <Route exact path={`/auth/login`} component={Login}/>
                <Route exact path={`/auth/register`} component={Register}/>
                <Route exact path={`/auth/forgot_password`} component={ForgotPassword}/>
            </Switch>
        );
    }
};
