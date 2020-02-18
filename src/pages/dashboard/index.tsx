import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "../../components/ProjectSpecific/Navbar";
import Drawer from "../../components/ProjectSpecific/Drawer";
import Overview from "./Overview";
import Servers from './Servers';

export default class Dashboard extends React.Component<{}, { drawerOpen: boolean }> {
    state = {
        drawerOpen: false
    }

    render() {
        return (
            <Fragment>
                <Navbar onDrawerOpen={(value: boolean) => this.setState({drawerOpen: value})}/>
                <div className={"flex h-full"}>
                    <div className={"flex-1"}><Drawer drawerOpen={this.state.drawerOpen}/></div>

                    <div className={"w-full"}>
                        <Switch>
                            <Route exact path="/clients/dashboard/overview" component={Overview}/>
                            <Route exact path="/clients/dashboard/servers" component={Servers}/>
                        </Switch>
                    </div>
                </div>
            </Fragment>

        );
    }
};