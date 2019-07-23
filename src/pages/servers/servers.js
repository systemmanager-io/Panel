import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {
    // faCheckCircle,
    // faClock,
    // faTimesCircle,
    faExclamationTriangle,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons/index";
import Card from "../../components/components/card/Card";
import CardBody from "../../components/components/card/CardBody";
import Table from "../../components/components/table/Table";
import TableHead from "../../components/components/table/TableHead";
import TableRow from "../../components/components/table/TableRow";
import TableHeader from "../../components/components/table/TableHeader";
import TableBody from "../../components/components/table/TableBody";
import TableData from "../../components/components/table/TableData";

export default class Servers extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-white text-2xl m-1">Servers</h2>
                <hr/>
                <div className="flex w-full flex-wrap">
                    <div className="w-full">
                        <Card>
                            <CardBody>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>#</TableHead>
                                            <TableHead style={{maxWidth: "10px"}}></TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead>IP/FQDN</TableHead>
                                            <TableHead className="hidden">Description</TableHead>
                                            <TableHead className="hidden">System Message</TableHead>
                                            {/*<TableHead>Cluster</TableHead>*/}

                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                    <TableRow>
                                        <TableData className="font-bold">1</TableData>
                                        <TableData><FontAwesomeIcon className="serverstatus text-blue-600" icon={faInfoCircle}/>
                                        </TableData>
                                        <TableData>NL-ALM1-01</TableData>
                                        <TableData>xxx.xxx.xxx.xxx</TableData>
                                        <TableData className="hidden">Instance with Info</TableData>
                                        <TableData className="hidden "></TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData className="font-bold">1</TableData>
                                        <TableData><FontAwesomeIcon className="serverstatus text-yellow-600"
                                                             icon={faExclamationTriangle}/></TableData>
                                        <TableData>NL-AMS1-01</TableData>
                                        <TableData>xxx.xxx.xxx.xxx</TableData>
                                        <TableData className="hidden">Instance with Warning</TableData>
                                        <TableData className="hidden" ></TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData className="font-bold">1</TableData>
                                        <TableData className="text-white"><FontAwesomeIcon className="serverstatus text-red-600"
                                                             icon={faExclamationTriangle}/></TableData>
                                        <TableData>NL-AMS1-02</TableData>
                                        <TableData>xxx.xxx.xxx.xxx</TableData>
                                        <TableData className="hidden">Instance with Critical error</TableData>
                                        <TableData className="hidden">11111111111111111111111111111111111111111111111111111111111111111</TableData>
                                    </TableRow>
                                    {/*<TableRow>*/}
                                    {/*    <TableHead scope="row">12</TableHead>*/}
                                    {/*    <TableHead><FontAwesomeIcon className="serverstatus online" icon={faCheckCircle}/></TableHead>*/}
                                    {/*    <TableData>NL-AMS1-03</TableData>*/}
                                    {/*    <TableData>xxx.xxx.xxx.xxx</TableData>*/}
                                    {/*    <TableData>Online Instance</TableData>*/}
                                    {/*    <TableData></TableData>*/}
                                    {/*</TableRow>*/}
                                    {/*<TableRow>*/}
                                    {/*    <TableHead scope="row">12</TableHead>*/}
                                    {/*    <TableHead><FontAwesomeIcon className="serverstatus warning" icon={faClock}/></TableHead>*/}
                                    {/*    <TableData>NL-AMS1-04</TableData>*/}
                                    {/*    <TableData>xxx.xxx.xxx.xxx</TableData>*/}
                                    {/*    <TableData>Pinging Instance</TableData>*/}
                                    {/*    <TableData></TableData>*/}
                                    {/*</TableRow>*/}
                                    {/*<TableRow>*/}
                                    {/*    <TableHead scope="row">1</TableHead>*/}
                                    {/*    <TableHead><FontAwesomeIcon className="serverstatus offline" icon={faTimesCircle}/>*/}
                                    {/*    </TableHead>*/}
                                    {/*    <TableData>NL-AMS1-05</TableData>*/}
                                    {/*    <TableData>xxx.xxx.xxx.xxx</TableData>*/}
                                    {/*    <TableData>Offline Instance</TableData>*/}
                                    {/*    <TableData></TableData>*/}
                                    {/*</TableRow>*/}
                                    </TableBody>
                                </Table>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

