import React, {Fragment} from 'react';
import DashboardPage from "../../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../../components/ProjectSpecific/Dashboard/DashboardTitle";
import DashboardContent from "../../../components/ProjectSpecific/Dashboard/DashboardContent";
import DashboardSubtitle from '../../../components/ProjectSpecific/Dashboard/DashboardSubtitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {faCheckCircle, faExclamationCircle, faInfoCircle} from "@fortawesome/free-solid-svg-icons";

export default class control extends React.Component<{ match: any }, { serverId: string }> {

    state = {
        serverId: this.props.match.params.serverId,
        name: "NL-AMS1-01",
        ip: "xxx.xxx.xxx.xxx",
        location: "Amsterdam"
    }

    render() {
        console.log(this.props)
        return (
            <Fragment>
                <DashboardPage>
                    <DashboardTitle>
                        <p>Server</p>
                        <DashboardSubtitle>UUID: {this.state.serverId}</DashboardSubtitle>
                    </DashboardTitle>

                    <DashboardContent className={"w-full"}>
                        <div className={"flex flex-wrap"}>
                            {/* Card */}
                            <div className={"w-full sm:w-6/12 lg:w-6/12 xl:w-8/12"}>
                                <div className={"m-1 rounded-md shadow bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>Server Details</div>
                                    {/* Card body */}
                                    <div className={"flex p-2 r-12 font-semibold"}>
                                        <div className={"pr-4"}>
                                            <h1>Name: {this.state.name}</h1>
                                            <h1>Location: {this.state.location}</h1>
                                            <h1>IP: {this.state.ip}</h1>
                                        </div>
                                        <div className={"flex-1 bg-red-700"}></div>
                                    </div>
                                    {/* Card footer */}
                                    <div
                                        className={"p-2 text-xs text-gray-700 border-t border-gray-700"}>{this.state.serverId}</div>
                                </div>
                            </div>

                            <div className={"w-full sm:w-6/12 lg:w-6/12 xl:w-4/12"}>
                                <div className={"rounded-md shadow m-1 bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>Latest log messages, limited to 10
                                    </div>
                                    {/* Card body*/}
                                    <div className={"font-semibold"}>
                                        <div className={"flex p-2 hover:bg-gray-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faExclamationCircle} className={"text-red-700"}/> NGINX crashed
                                            </div>
                                            <div className={"text-gray-600 text-sm"}>7/11/2020, 3:36:14 PM</div>
                                        </div>
                                        <div className={"flex p-2 hover:bg-gray-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faInfoCircle} className={"text-blue-700"}/> MySQL
                                                Update available
                                            </div>
                                            <div className={"text-gray-600 text-sm"}>7/11/2020, 3:00:00 PM</div>
                                        </div>
                                        <div className={"flex p-2 hover:bg-gray-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faCheckCircle} className={"text-green-700"}/> System booted! Have Fun!
                                            </div>
                                            <div className={"text-gray-600 text-sm"}>7/9/2020, 1:43:54 PM</div>
                                        </div>

                                    </div>
                                    {/* Card footer */}
                                    <div className={"p-2 text-xs text-gray-700 border-t border-gray-700"}>More log
                                        entries <FontAwesomeIcon icon={faArrowRight}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"w-full md:w-4/12"}>
                                <div className={"rounded-md shadow m-1 bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>CPU Usage
                                    </div>
                                    {/* Card body*/}
                                    <div className={"font-semibold"}>
                                    </div>
                                    {/* Card footer */}
                                </div>
                            </div>

                            <div className={"w-full md:w-4/12"}>
                                <div className={"rounded-md shadow m-1 bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>RAM Usage
                                    </div>
                                    {/* Card body*/}
                                    <div className={"font-semibold"}>
                                    </div>
                                    {/* Card footer */}
                                </div>
                            </div>

                            <div className={"w-full md:w-4/12"}>
                                <div className={"rounded-md shadow m-1 bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>Storage Usage
                                    </div>
                                    {/* Card body*/}
                                    <div className={"font-semibold"}>
                                    </div>
                                    {/* Card footer */}
                                </div>
                            </div>
                        </div>


                    </DashboardContent>
                </DashboardPage>
            </Fragment>
        );
    }
};
