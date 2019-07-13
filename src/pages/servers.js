import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {
    faCheckCircle,
    faClock,
    faExclamationTriangle, faInfoCircle,
} from "@fortawesome/free-solid-svg-icons/index";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import Card from "../components/components/card";
import CardBody from "../components/components/cardBody";
import {Fragment} from "react";

export default class Servers extends React.Component {
    render() {
        return (
            <Fragment>
                <h2 className="text-white text-2xl m-1">Servers</h2>
                <Card className="m-1">
                    <CardBody>
                        <table className="responsive">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                                <th>Name</th>
                                <th>IP/FQDN</th>
                                <th>Description</th>
                                {/*<th>System Message</th>*/}
                                {/*<th>Cluster</th>*/}

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th><FontAwesomeIcon className="serverstatus info" icon={faInfoCircle}/></th>
                                <td>NL-ALM1-01</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Instance with Info</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th><FontAwesomeIcon className="serverstatus warning"
                                                     icon={faExclamationTriangle}/></th>
                                <td>NL-AMS1-01</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Instance with Warning</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th><FontAwesomeIcon className="serverstatus danger"
                                                     icon={faExclamationTriangle}/></th>
                                <td>NL-AMS1-02</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Instance with Critical error</td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <th><FontAwesomeIcon className="serverstatus online" icon={faCheckCircle}/></th>
                                <td>NL-AMS1-03</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Online Instance</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">12</th>
                                <th><FontAwesomeIcon className="serverstatus warning" icon={faClock}/></th>
                                <td>NL-AMS1-04</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Pinging Instance</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <th><FontAwesomeIcon className="serverstatus offline" icon={faTimesCircle}/>
                                </th>
                                <td>NL-AMS1-05</td>
                                <td>xxx.xxx.xxx.xxx</td>
                                <td>Offline Instance</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Fragment>
        );
    }
}

