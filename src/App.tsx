import React from 'react';
import './css/tailwind.scss';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardRoutes from "./DashboardRoutes";
import debug from "debug";


export default class App extends React.Component<{}, { isLoggedIn: boolean }> {

    render() {
        return (
            <Switch>
                <Route path="/" component={DashboardRoutes}/>
            </Switch>
        );
    }
};


export const version = "v0.0.3c-alpha";
const appDebug = debug("systemmanager");
export const cloudDebug = appDebug.extend("cloud");
cloudDebug.enabled = true;
