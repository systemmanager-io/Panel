import React, {Fragment} from 'react';
import DashboardPage from "../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../components/ProjectSpecific/Dashboard/DashboardTitle";
import Alert from "../../components/Alert";
import DashboardContent from "../../components/ProjectSpecific/Dashboard/DashboardContent";
import Infobox from '../../components/Infobox';
import {faExclamationTriangle, faServer, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

export default class Overview extends React.Component<{}, {}> {


    render() {
        return (
            <Fragment>
                <DashboardPage>
                    <DashboardTitle title={"Overview"} subtitle={"A quick glance on the statusses of everything"}/>
                    <DashboardContent>
                        <div className={"flex flex-wrap"}>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}><Infobox type={"danger"} icon={faExclamationTriangle} desc={"1"} title={"Errors"}/></div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}><Infobox type={"warning"} icon={faExclamationCircle} desc={"6"} title={"Warnings"}/></div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}><Infobox type={"success"} icon={faServer} desc={"12"} title={"OK"}/></div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}><Infobox type={"info"} icon={faServer} desc={"New Update Available!"} title={"Update"}/></div>
                        </div>
                    </DashboardContent>
                </DashboardPage>
            </Fragment>
        );
    }
};