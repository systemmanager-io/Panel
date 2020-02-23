import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default class DrawerFooter extends React.Component<{ icon: any }, LoginTypes> {
    render() {
        return (
            <div className={"px-4 py-3 select-none bottom-0 text-xs bg-gray-900"}>
                <div className={"flex"}>
                    <FontAwesomeIcon className={"flex mr-2 text-gray-600 w-4 text self-center"} icon={this.props.icon}/>
                    <p className={"flex-1 font-mono text-gray-600"}>{this.props.children}</p>
                </div>
            </div>
        );
    }

};