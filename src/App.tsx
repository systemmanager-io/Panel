import React, {Fragment} from 'react';
import './css/portfolio.scss';
import './css/tailwind.scss';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Auth from "./pages/auth";

export default class App extends React.Component {

    render() {
        console.log('base');
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/auth" component={Auth}/>
                </Switch>
            </Fragment>
        );
    }
};
