import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default class Auth extends React.Component<any, {isLoggedIn: boolean}> {

    state = {
        isLoggedIn: false
    }

    componentDidMount(): void {
        //Check for loggedIn user.
        this.setState({isLoggedIn: true})
    }

    render() {
        return (
            <div className={"h-screen"}>


                {this.state.isLoggedIn ? <Redirect to="/dashboard" /> : ""}
                <Switch>
                    <Route exact path={`/login`} component={Login}/>
                    <Route exact path={`/register`} component={Register}/>
                    <Route exact path={`/forgot_password`} component={ForgotPassword}/>
                </Switch>
            </div>
        );
    }
};
