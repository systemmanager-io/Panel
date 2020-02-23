import React from 'react';
import './css/portfolio.scss';
import './css/tailwind.scss';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import DashboardRoutes from "./DashboardRoutes";
import debug from "debug";


export default class App extends React.Component<{}, { isLoggedIn: boolean }> {

    render() {
        return (
            <div className={"text-white"}>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/clients" component={DashboardRoutes}/>
                </Switch>
            </div>
        );
    }
};



const appDebug = debug("systemmanager");
export const cloudDebug = appDebug.extend("cloud");
cloudDebug.enabled = true;