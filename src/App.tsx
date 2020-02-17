import React, {Fragment} from 'react';
import './css/portfolio.scss';
import './css/tailwind.scss';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Auth from "./pages/auth";
import Dashboard from "./pages/Dashboard";

export default class App extends React.Component {

    render() {
        return (
            <div className={"h-full text-white bg-gray-800 w-full"}>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </div>
        );
    }
};
