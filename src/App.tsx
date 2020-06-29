import React from 'react';
import './css/tailwind.scss';
import {Route, Switch} from "react-router-dom";
import debug from "debug";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";


export default class App extends React.Component<{}, { isLoggedIn: boolean }> {

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


export const version = "v0.0.3c-alpha";
const appDebug = debug("systemmanager");
export const cloudDebug = appDebug.extend("cloud");
cloudDebug.enabled = true;
