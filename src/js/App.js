import * as React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/login/login";
import LoginLayout from "./layouts/LoginLayout";
import Servers from "./pages/servers";
import '../css/app.scss';
import {Fragment} from "react";

class App extends React.Component {

    state = {
        isLoggedIn: false,
        user: {}
    };

    render() {
        return (
            <Fragment>
                <Link to="/dashboard">Dashboard</Link>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <AdminLayout>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/servers" exact component={Servers}/>
                        <Route path="/settings/servers" exact component={Servers}/>
                        <Route path="/settings/servers/:id" exact component={Servers}/>
                        {/*<Route path="/management" exact component={Management}/>*/}
                    </AdminLayout>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
