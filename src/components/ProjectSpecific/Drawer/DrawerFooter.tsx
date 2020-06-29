import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {cloudDebug} from "../../../App";
import Pill from "../../Pill";


export default class DrawerFooter extends React.Component<{ icon: any }, LoginTypes> {
    render() {
        return (
            <Fragment>
                <div className={"p-4"}>
                    <div className={"flex flex-wrap text-sm text-center font-mono"}>
                        <Pill className={"mr-1 mb-1"} type={"success"}>12 OK</Pill>
                        <Pill className={"mr-1 mb-1"} type={"warning"}>6 WARNING</Pill>
                        <Pill className={"mr-1 mb-1"} type={"danger"}>1 CRITICAL</Pill>
                        <Pill className={"mr-1 mb-1"} type={"primary"}>1 UNKNOWN</Pill>
                    </div>
                </div>
                <div className={"flex text-sm font-mono truncate mb-2"}>
                    <img className={"self-center h-12 w-12 rounded-full border mr-2"}
                         src={"https://genericdevelopment.nl/static/media/photo.22ca8cd3.jpg"}
                         alt={"Organization Logo"}/>
                    <div className={"self-center"}>
                        <p className={"text-xs"}>Organization: </p>
                        <p onClick={() => cloudDebug("Click Dropdown")}
                           className={"select-none rounded shadow mt-1"}>GenericDevelopment</p>
                    </div>
                </div>
                <div className={"px-4 py-3 select-none bottom-0 text-xs bg-gray-900"}>
                    <div className={"flex"}>
                        <FontAwesomeIcon className={"flex mr-2 text-gray-600 w-4 text self-center"}
                                         icon={this.props.icon}/>
                        <p className={"flex-1 font-mono text-gray-600"}>{this.props.children}</p>
                    </div>
                </div>
            </Fragment>
        );
    }

};
