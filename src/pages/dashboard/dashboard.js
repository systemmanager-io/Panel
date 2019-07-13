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
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="red">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Offline</h5>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="blue">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Server Message</h5>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="yellow">
                            <CardBody>
                                <h4>Server status</h4>
                                <h5>1 Server Warning</h5>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

