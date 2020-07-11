import React, {Fragment} from 'react';
import DashboardPage from "../../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../../components/ProjectSpecific/Dashboard/DashboardTitle";
import DashboardContent from "../../../components/ProjectSpecific/Dashboard/DashboardContent";
import DashboardSubtitle from '../../../components/ProjectSpecific/Dashboard/DashboardSubtitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {
    faCheckCircle,
    faExclamationCircle,
    faInfoCircle,
    faRedoAlt,
    faExclamationTriangle, faTimes
} from "@fortawesome/free-solid-svg-icons";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons/faPowerOff";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import {faTerminal} from "@fortawesome/free-solid-svg-icons/faTerminal";

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
                        <div className={"flex flex-col-reverse"}><p>Server</p></div>
                        <DashboardSubtitle>UUID: {this.state.serverId}</DashboardSubtitle>
                    </DashboardTitle>

                    <DashboardContent className={"w-full"}>

                        <div
                            className={"flex m-1 border-blue-700 border-2 p-2 flex-1 bg-gray-800 text-gray-600 rounded"}>
                            <div className={"flex-1"}>
                                <FontAwesomeIcon icon={faInfoCircle}/> I'm
                                a field that is here to place some stuff in the future, we can put
                                NEED
                                TO KNOW information here. Information that has to be known first
                                before
                                anything else possibly has been read. We could use color codes to
                                determine the importance
                            </div>
                            <button className={"self-center text-base rounded mr-2 "}><FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div
                            className={"m-1 flex text-xl border-yellow-700 border-2 p-2 flex-1 bg-gray-800 text-yellow-600 rounded"}>
                            <div className={"flex-1"}><FontAwesomeIcon icon={faExclamationCircle}/> I
                                would be a warning
                            </div>
                            <button className={"self-center text-base mr-2 rounded"}><FontAwesomeIcon
                                icon={faTimes}/></button>
                        </div>
                        <div
                            className={"m-1 flex flex-col md:flex-row text-xl border-red-700 border-2 p-2 flex-1 bg-red-700 text-white rounded"}>
                            <div className={"flex-1 self-center"}>
                                <FontAwesomeIcon
                                    icon={faExclamationCircle}/> I would be a error, but not in a way the server or
                                product
                                is in danger
                            </div>
                            <button
                                className={"border border-gray-700 hover:bg-gray-700 rounded bg-gray-800 text-base p-2"}>Acknowledge
                            </button>
                        </div>
                        <div
                            className={"flex flex-col md:flex-row m-1 text-2xl border-red-700 border-2 p-2 serverbooting flex-1 text-white rounded"}>
                            <div className={"flex-1 self-center"}>
                                <FontAwesomeIcon
                                    icon={faExclamationTriangle}/> SERVER OFFLINE
                            </div>
                            <button
                                className={"border border-gray-700 hover:bg-gray-700 rounded bg-gray-800 text-base p-2"}>Acknowledge
                            </button>
                        </div>

                        <div className={"flex flex-wrap"}>
                            {/* Card */}
                            <div className={"w-full sm:w-6/12 lg:w-6/12 xl:w-8/12"}>
                                <div className={"m-1 rounded-md shadow bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>Server Details
                                    </div>
                                    {/* Card body */}
                                    <div className={"flex-1 flex flex-col md:flex-row p-2 r-12 font-base"}>
                                        <div className={"flex-1"}>
                                            <h1>Name: {this.state.name}</h1>
                                            <h1>UUID: {this.state.serverId}</h1>
                                            <h1>Location: {this.state.location}</h1>
                                            <h1>IP: {this.state.ip}</h1>
                                        </div>
                                    </div>
                                    {/* Card footer */}
                                    <div className={"flex"}>
                                        <div
                                            className={"flex text-center flex-col flex p-2 text-gray-700 border-t border-gray-700"}>
                                            <div className={"hidden md:block text-xs text-center"}>Management</div>
                                            <div>
                                                <button
                                                    className={"px-2 py-1 hover:bg-gray-700 hover:text-blue-700 rounded"}>
                                                    <FontAwesomeIcon className={"rounded text-base"} icon={faTerminal}/>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={"flex-1 flex flex-col  border-t border-gray-700 text-center"}>
                                            <p className={"hidden md:block text-xs text-center text-gray-700"}></p>
                                        </div>
                                        <div className={"flex flex-col p-2 text-gray-700 border-t border-gray-700"}>
                                            <div className={"hidden md:block text-xs text-center"}>Power</div>
                                            <div>
                                                <button
                                                    className={"px-2 mr-1 py-1 hover:bg-gray-700 hover:text-red-700 rounded"}>
                                                    <FontAwesomeIcon className={"rounded text-base"} icon={faPowerOff}/>
                                                </button>
                                                <button
                                                    className={"px-2 mr-1 py-1 hover:bg-gray-700 hover:text-yellow-700 rounded"}>
                                                    <FontAwesomeIcon className={"rounded text-base"} icon={faMoon}/>
                                                </button>
                                                <button
                                                    className={"px-2 py-1 hover:bg-gray-700 hover:text-red-700 rounded"}>
                                                    <FontAwesomeIcon className={"rounded text-base"} icon={faRedoAlt}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"w-full sm:w-6/12 lg:w-6/12 xl:w-4/12"}>
                                <div className={"rounded-md shadow m-1 bg-gray-900"}>
                                    {/* Card title */}
                                    <div className={"p-2 border-b border-gray-700 font-semibold"}>Latest log
                                        messages,
                                        limited to 10
                                    </div>
                                    {/* Card body*/}
                                    <div className={"font-semibold"}>
                                        <div
                                            className={"flex p-2 hover:bg-green-600 bg-green-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faCheckCircle} className={"text-white"}/> SYSTEM: SERVER
                                                RECOVERED
                                            </div>
                                            <div className={"text-gray-400 text-sm"}>7/11/2020, 4:01:05 PM</div>
                                        </div>

                                        <div
                                            className={"flex p-2 hover:bg-red-600 bg-red-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faExclamationTriangle} className={"text-white"}/> SYSTEM:
                                                SERVER OFFLINE
                                            </div>
                                            <div className={"text-gray-400 text-sm"}>7/11/2020, 3:54:36 PM</div>
                                        </div>

                                        <div
                                            className={"flex p-2 hover:bg-yellow-600 bg-yellow-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faInfoCircle} className={"text-white"}/> SYSTEM: Server
                                                stopped responding (3/3)
                                            </div>
                                            <div className={"text-gray-400 text-sm"}>7/11/2020, 3:36:14 PM</div>
                                        </div>

                                        <div
                                            className={"flex p-2 hover:bg-yellow-600 bg-yellow-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faInfoCircle} className={"text-white"}/> SYSTEM: Server
                                                stopped responding (2/3)
                                            </div>
                                            <div className={"text-gray-400 text-sm"}>7/11/2020, 3:36:14 PM</div>
                                        </div>

                                        <div
                                            className={"flex p-2 hover:bg-yellow-600 bg-yellow-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faInfoCircle} className={"text-white"}/> SYSTEM: Server
                                                stopped responding (1/3)
                                            </div>
                                            <div className={"text-gray-400 text-sm"}>7/11/2020, 3:36:14 PM</div>
                                        </div>

                                        <div className={"flex p-2 hover:bg-gray-700 border-gray-700 border-b"}>
                                            <div className={"flex-1"}><FontAwesomeIcon
                                                icon={faExclamationTriangle} className={"text-red-700"}/> NGINX
                                                crashed
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
                                                icon={faCheckCircle} className={"text-green-700"}/> System booted!
                                                Have
                                                Fun!
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
                                    <div className={"p-2"}>
                                        Being worked on, some more work on the Core has to be done first to make this possible
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
                                    <div className={"p-2"}>
                                        Being worked on, some more work on the Core has to be done first to make this possible
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
                                    <div className={"p-2"}>
                                        Being worked on, some more work on the Core has to be done first to make this possible
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
