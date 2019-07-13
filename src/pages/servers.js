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

export default class Servers extends React.Component {
    render() {
        return (
            <div>
                <h2>Servers</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardBody>
                                <table className="table-auto">
                                    <thead>
                                    <tr>
                                        <th style={{width: "25px"}}>#</th>
                                        <th style={{width: "25px"}}></th>
                                        <th style={{minWidth: "200px"}}>Name</th>
                                        <th style={{minWidth: "100px"}}>IP/FQDN</th>
                                        <th style={{minWidth: "100px"}}>Description</th>
                                        <th style={{minWidth: "100px"}}>System Message</th>
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
                                        <td>SMART Error</td>
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
                    </div>
                </div>
            </div>
        );
    }
}

