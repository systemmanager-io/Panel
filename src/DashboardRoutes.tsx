import React from 'react';
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
            <div className={"bg-gray-800"}>

                {/*{this.state.isLoggedIn ? <Redirect to="/clients/dashboard/servers"/> : <Redirect to="/clients/login"/>}*/}

                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route exact path={`/login`} component={Login}/>
                    <Route exact path={`/register`} component={Register}/>
                    <Route exact path={`/forgot_password`} component={ForgotPassword}/>
                </Switch>
            </div>
        );
    }
};
