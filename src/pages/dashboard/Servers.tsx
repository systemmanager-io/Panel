import React, {Fragment} from 'react';
import DashboardPage from "../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../components/ProjectSpecific/Dashboard/DashboardTitle";

export default class Servers extends React.Component<{}, {}> {


    render() {
        return (
            <Fragment>
                <DashboardPage>
                    <DashboardTitle title={"Servers"} subtitle={"All servers in the system"}/>
                </DashboardPage>
            </Fragment>
        );
    }
};