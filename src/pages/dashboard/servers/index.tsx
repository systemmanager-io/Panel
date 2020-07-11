import React, {Fragment} from 'react';
import DashboardPage from "../../../components/ProjectSpecific/Dashboard/DashboardPage";
import DashboardTitle from "../../../components/ProjectSpecific/Dashboard/DashboardTitle";
import Table from "../../../components/Table/Table";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCircleNotch, faDotCircle,
    faExclamationCircle, faExclamationTriangle,
    faPauseCircle,
    faPlayCircle,
    faStopCircle,
    faCircle, faCheckCircle, faTimesCircle, faQuestionCircle, faTrash, faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import DashboardContent from "../../../components/ProjectSpecific/Dashboard/DashboardContent";

export default class index extends React.Component<{}, {}> {


    render() {
        return (
            <Fragment>
                <DashboardPage>
                    <DashboardTitle title={"Servers"} subtitle={"All servers in the system"}/>
                    <DashboardContent className={"w-full"}>
                        <Table>
                            <thead className={"border-b border-gray-700"}>
                            <tr className={"text-left"}>
                                <th className={"w-4"}/>
                                <th className={""}>Name</th>
                                <th className={""}>IP</th>
                                <th className={"w-2"}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={"border-b border-gray-700"}>

                                <td className={"w-4 content-center items-center"}><FontAwesomeIcon
                                    className={"text-green-700 text-xl m-1"} icon={faCheckCircle}/></td>
                                <td className={""}><Link className={"font-semibold"}
                                                         to={"servers/03f4421a-8fc5-42e7-a214-c4074b045047"}>NL-AMS1-01</Link>
                                </td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td className={"text-center"}>
                                    <Button size={"xs"} onClick={() => {
                                    }} type={"danger"}>
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                                </td>
                            </tr>
                            <tr className={"border-b border-gray-700"}>
                                <td><FontAwesomeIcon className={"text-yellow-500 text-xl m-1"}
                                                     icon={faQuestionCircle}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className={"border-b border-gray-700"}>
                                <td><FontAwesomeIcon className={"text-red-700 text-xl m-1"} icon={faTimesCircle}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr className={"border-b border-gray-700"}>
                                <td><FontAwesomeIcon className={"text-yellow-500 text-xl m-1"}
                                                     icon={faExclamationCircle}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon className={"text-red-700 text-xl m-1"}
                                                     icon={faExclamationCircle}/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </DashboardContent>
                </DashboardPage>
            </Fragment>
        );
    }
};
