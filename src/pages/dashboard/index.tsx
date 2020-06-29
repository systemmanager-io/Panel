import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "../../components/ProjectSpecific/Navbar";
import Drawer from "../../components/ProjectSpecific/Drawer/Drawer";
import Overview from "./Overview";
import Servers from './Servers';

export default class Dashboard extends React.Component<{}, { drawerOpen: boolean }> {
    state = {
        drawerOpen: false
    };

    render() {
        return (
            <Fragment>
                <div className={"block md:flex"}>
                    <div>
                        <Drawer/>
                    </div>
                    <div className={"flex-1"}>
                        <Switch>
                            <Route path="/dashboard/overview" component={Overview}/>
                            <Route exact path="/dashboard/servers" component={Servers}/>
                        </Switch>
                    </div>
                </div>
            </Fragment>

        );
    }
};
