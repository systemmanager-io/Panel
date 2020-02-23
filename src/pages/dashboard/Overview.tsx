import React, {Fragment} from 'react';
import DashboardPage from "../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../components/ProjectSpecific/Dashboard/DashboardTitle";
import DashboardContent from "../../components/ProjectSpecific/Dashboard/DashboardContent";
import Infobox from '../../components/Infobox/Infobox';
import {
    faExclamationTriangle,
    faExclamationCircle,
    faInfoCircle,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import InfoboxTitle from "../../components/Infobox/InfoboxTitle";
import InfoboxDescription from "../../components/Infobox/InfoboxDescription";
import {faInfo} from "@fortawesome/free-solid-svg-icons/faInfo";
import {cloudDebug} from "../../App";

export default class Overview extends React.Component<{}, {}> {


    render() {
        cloudDebug("Test");
        return (
            <Fragment>
                <DashboardPage>
                    <DashboardTitle title={"Overview"} subtitle={"A quick glance on the statusses of everything"}/>
                    <p className={"font-mono"}>(Everything is placed weird on purpose to show me if I fixed/fucked up
                        something)</p> {/* @TODO REMOVE WHEN RELEASING V1!!!!!!!!*/}
                    <DashboardContent>
                        <div className={"flex flex-wrap"}>
                            <div className={"w-full flex-auto sm:w-6/12 lg:w-4/12 xl:w-3/12"}>
                                <Infobox type={"danger"}
                                         icon={faExclamationTriangle}
                                >
                                    <InfoboxTitle>Servers with an error</InfoboxTitle>
                                    <InfoboxDescription>1</InfoboxDescription>
                                </Infobox>
                            </div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}>
                                <Infobox type={"warning"}
                                         icon={faExclamationCircle}
                                >
                                    <InfoboxTitle>Servers with a warning</InfoboxTitle>
                                    <InfoboxDescription>6</InfoboxDescription>
                                </Infobox>
                            </div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}>
                                <Infobox type={"success"}
                                         icon={faCheckCircle}>
                                    <InfoboxTitle>Servers with OK status</InfoboxTitle>
                                    <InfoboxDescription>12</InfoboxDescription>
                                </Infobox>
                            </div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}>
                                <Infobox type={"info"}
                                         icon={faInfoCircle}>
                                    <InfoboxTitle>This title might be to long for the infobox it is placed in. So it
                                        will break off lines and mess up the styling.</InfoboxTitle>
                                    <InfoboxDescription>
                                        And so is its description, Now this is not a real world "Usecase" but it might
                                        happen. So i want to try to fix it anyway.
                                    </InfoboxDescription>
                                </Infobox>
                            </div>
                            <div className={"w-full sm:w-6/12 lg:w-4/12 xl:w-3/12"}>
                                <Infobox type={"info"}>
                                    <InfoboxTitle>INFOBOX WITHOUT ICON</InfoboxTitle>
                                    <InfoboxDescription>DESCRIPTION</InfoboxDescription>
                                </Infobox>
                            </div>
                        </div>
                    </DashboardContent>
                </DashboardPage>
            </Fragment>
        );
    }
};