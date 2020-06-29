import React, { Fragment } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


export default class DrawerItem extends React.Component<{ icon: any, to: string }, any> {
    render() {
        return (
            <Link to={this.props.to}>
                <div className={"m-1 px-4 py-3 rounded-md text-sm text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"}>
                    <div className={"flex select-none"}>
                        <div className={"mr-2"}>
                            <FontAwesomeIcon icon={this.props.icon}/>
                        </div>
                        <p className={"flex-1"}>{this.props.children}</p></div>
                </div>
            </Link>
        );
    }

};
