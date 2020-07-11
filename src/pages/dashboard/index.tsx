import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import Drawer from "../../components/ProjectSpecific/Drawer/Drawer";
import overview from "./overview";
import servers from './servers/index';
import serverControl from './servers/control'

export default class Dashboard extends React.Component<{}, { drawerOpen: boolean }> {
    state = {
        drawerOpen: false
    };

    render() {
        return (
            <Fragment>
                <div className={"min-h-screen block md:flex"}>
                    <div className={""}>
                        <Drawer/>
                    </div>
                    <div className={"flex-1"}>
                        <Switch>
                            <Route path="/dashboard/overview" component={overview}/>
                            <Route exact path="/dashboard/servers" component={servers}/>
                            <Route exact path="/dashboard/servers/:serverId" component={serverControl}/>
                        </Switch>
                    </div>
                </div>
            </Fragment>

        );
    }
};
