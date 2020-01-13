import React from 'react';
import {Route, Switch,} from "react-router-dom";
import Login from "./Login";
export default class Auth extends React.Component {


    render() {

        console.log('auth');
        return (
            <Switch>
                <Route exact path={`/auth/login`} component={Login}/>
            </Switch>
        );
    }
};
