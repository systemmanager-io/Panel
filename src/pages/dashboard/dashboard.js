import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/index";
import Card from "../../components/components/card";
import CardBody from "../../components/components/cardBody";
// import Toast from "../../components/Toast";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2 className="text-white text-2xl m-1">Dashboard</h2>
                <hr/>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card>
                            <CardBody className="">
                                <h4>Server status</h4>
                                <h5>All Systems Operational</h5>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12 ">
                        <Card className="bg-red-600">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Offline</h5>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card className="bg-blue-600">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Server Message</h5>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card inverse color="success">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Online | 1 Offline</h5>
                            </CardBody>
                        </Card>
                    </div>
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="danger"/>}>*/}
                    {/*        Server Offline*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        (ServerName) has gone offline!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="success"/>}>*/}
                    {/*        Server Online*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        (ServerName) has come online!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="primary"/>}>*/}
                    {/*        Connection Issues*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        Panel has some problems connecting to the backend! Expect issues with the panel!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*<Toast>*/}
                    {/*    <ToastHeader icon={<Spinner size="sm" type="grow" color="warning"/>}>*/}
                    {/*        Pinging*/}
                    {/*    </ToastHeader>*/}
                    {/*    <ToastBody>*/}
                    {/*        Started Pinging manually!*/}
                    {/*    </ToastBody>*/}
                    {/*</Toast>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

