import React from 'react';
import './css/portfolio.scss';
import './css/tailwind.scss';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from './pages/dashboard';

export default class App extends React.Component<{}, { isLoggedIn: boolean }> {

    state = {
        isLoggedIn: false
    };

    componentDidMount(): void {
        //Check for loggedIn user.
        this.setState({isLoggedIn: true})
    };
    render() {
        return (
            <div className={"text-white"}>

                {this.state.isLoggedIn ? <Redirect to="/clients/dashboard/overview"/> : <Redirect to="/clients/login"/>}

                <Switch>
                    <Route path="/clients/dashboard" component={Dashboard}/>
                    <Route exact path={`/clients/login`} component={Login}/>
                    <Route exact path={`/clients/register`} component={Register}/>
                    <Route exact path={`/clients/forgot_password`} component={ForgotPassword}/>
                </Switch>
            </div>
        );
    }
};
