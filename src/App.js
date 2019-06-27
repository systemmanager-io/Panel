import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import './sass/app.scss';
import './sass/tailwind.scss';
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/login/login";
import Servers from "./pages/servers";
import {Fragment} from "react";

class App extends React.Component {

    state = {
        isLoggedIn: false,
        user: {}
    };

    render() {
        return (
            <Fragment>
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
