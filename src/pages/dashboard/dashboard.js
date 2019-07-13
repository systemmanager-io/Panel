import * as React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import Card from "../../components/components/card";
import CardBody from "../../components/components/cardBody";
import {
    faExclamationCircle,
    faExclamationTriangle,
    faInfo,
    faInfoCircle,
    faServer
} from "@fortawesome/free-solid-svg-icons";
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
                                <div className="flex flex-wrap">
                                    <div className="w-3/12">
                                        <FontAwesomeIcon className="text-5xl" icon={faServer}/>
                                    </div>
                                    <div className="w-9/12 h-full">
                                        <h5 className="justify-center">All Systems OK</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="red">
                            <CardBody>
                                <div className="flex flex-wrap">
                                    <div className="w-3/12">
                                        <FontAwesomeIcon className="text-5xl content-center"
                                                         icon={faExclamationTriangle}/>
                                    </div>
                                    <div className="w-9/12">
                                        <h5>1 Server requires immediate attention</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="blue">
                            <CardBody>
                                <div className="flex flex-wrap">
                                    <div className="w-3/12">
                                        <FontAwesomeIcon className="text-5xl" icon={faInfoCircle}/>
                                    </div>
                                    <div className="w-9/12">
                                        <h5 className="align-middle">1 server send a message</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/12 lg:w-3/12">
                        <Card color="yellow">
                            <CardBody>
                                <div className="flex flex-wrap">
                                    <div className="w-3/12">
                                        <FontAwesomeIcon className="text-5xl" icon={faExclamationCircle}/>
                                    </div>
                                    <div className="w-9/12">
                                        <h5 className="align-middle">1 server has a warning</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

