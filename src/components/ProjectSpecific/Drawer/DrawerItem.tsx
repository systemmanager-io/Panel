import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";


export default class DrawerItem extends React.Component<{ icon: any, to: string }, LoginTypes> {
    render() {
        return (
            <div className={"px-4 py-3 text-sm hover:bg-gray-800"}>
                <Link className={"flex select-none"} to={this.props.to}>
                    <FontAwesomeIcon className={"flex mr-2 w-4 self-center"} icon={this.props.icon}/>
                    <p className={"flex-1"}>{this.props.children}</p></Link>
            </div>
        );
    }

};