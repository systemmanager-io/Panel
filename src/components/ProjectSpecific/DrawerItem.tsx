import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faBars, faServer} from '@fortawesome/free-solid-svg-icons';
import Pill from "../Pill";
import {Link} from "react-router-dom";


export default class DrawerItem extends React.Component<{ icon: any, to: string }, LoginTypes> {
    render() {
        return (
            <div className={"px-4 py-3 text-sm hover:bg-gray-800"}>
                <Link className={"flex"} to={this.props.to}>
                    <div className={"flex mr-2 w-4 text items-center"}>
                        <FontAwesomeIcon className={"  "} icon={this.props.icon}/>
                    </div>
                    <p className={"flex-1"}>{this.props.children}</p></Link>
            </div>
        );
    }

};