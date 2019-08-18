import * as React from 'react';
import Button from "@material-ui/core/Button";
// import {withStyles} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <h2 className="text-white text-2xl m-1">Dashboard</h2>
                <CssBaseline/>
                <hr/>
                <div className="flex flex-wrap">
                    {/*<div className="w-full md:w-4/12 lg:w-3/12">*/}
                    {/*    <Card>*/}
                    {/*        <CardBody className="">*/}
                    {/*            <div className="flex flex-wrap">*/}
                    {/*                <div className="w-3/12">*/}
                    {/*                    <FontAwesomeIcon className="text-5xl" icon={faServer}/>*/}
                    {/*                </div>*/}
                    {/*                <div className="w-9/12 h-full">*/}
                    {/*                    <h5 className="justify-center text-3xl">All Systems OK</h5>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </CardBody>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                    {/*<div className="w-full md:w-4/12 lg:w-3/12">*/}
                    {/*    <Card color="red">*/}
                    {/*        <CardBody>*/}
                    {/*            <div className="flex flex-wrap">*/}
                    {/*                <div className="w-3/12">*/}
                    {/*                    <FontAwesomeIcon className="text-6xl content-center"*/}
                    {/*                                     icon={faExclamationTriangle}/>*/}
                    {/*                </div>*/}
                    {/*                <div className="w-9/12">*/}
                    {/*                    <h5 className="align-middle text-2xl">NL-AMS1-01 </h5>*/}
                    {/*                    <h5>requires immediate attention</h5>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </CardBody>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                    {/*<div className="w-full md:w-4/12 lg:w-3/12">*/}
                    {/*    <Card color="blue">*/}
                    {/*        <CardBody>*/}
                    {/*            <div className="flex flex-wrap">*/}
                    {/*                <div className="w-3/12">*/}
                    {/*                    <FontAwesomeIcon className="text-6xl" icon={faInfoCircle}/>*/}
                    {/*                </div>*/}
                    {/*                <div className="w-9/12">*/}
                    {/*                    <h5 className="align-middle text-2xl">NL-AMS1-01 </h5>*/}
                    {/*                    <h5>has send a message</h5>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </CardBody>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                    {/*<div className="w-full md:w-4/12 lg:w-3/12">*/}
                    {/*    <Card color="yellow">*/}
                    {/*        <CardBody>*/}
                    {/*            <div className="flex flex-wrap">*/}
                    {/*                <div className="w-3/12">*/}
                    {/*                    <FontAwesomeIcon className="text-6xl" icon={faExclamationCircle}/>*/}
                    {/*                </div>*/}
                    {/*                <div className="w-9/12">*/}
                    {/*                    <h5 className="align-middle text-2xl">NL-AMS1-01 </h5>*/}
                    {/*                    <h5>has a warning</h5>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </CardBody>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                    <Button variant={"contained"} color="danger">TestButton</Button>
                    <Button variant={"contained"} color="warning">TestButton</Button>
                    <Button variant={"contained"} color="info">TestButton</Button>
                    <Button variant={"contained"} color="success">TestButton</Button>
                    <Button variant={"contained"} color="primary">TestButton</Button>
                    <Button variant={"contained"} color="secondary">TestButton</Button>
                </div>
            </div>
        );
    }
}

export default Dashboard