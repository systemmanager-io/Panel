import React from 'react';
import './css/tailwind.scss';
import {Route, Switch, Redirect} from "react-router-dom";
import debug from "debug";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Locked from "./pages/auth/Locked";
import NotFound from "./pages/NotFound";


export default class App extends React.Component<{}, { isLoggedIn: boolean }> {



    render() {


        return (
            <div className={"bg-gray-800 text-white overflow-hidden"}>


                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route exact path={`/login`} component={Login}/>
                    <Route exact path={`/lockscreen`} component={Locked}/>
                    <Route exact path={`/forgot_password`} component={ForgotPassword}/>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
};


export const version = "v0.0.3c-alpha";
const appDebug = debug("systemmanager");
export const cloudDebug = appDebug.extend("cloud");
cloudDebug.enabled = true;
