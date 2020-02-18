import React, {Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class TextField extends React.Component<{ label: String, icon?: any, type: "password" | "text", onChange: Function }, {}> {

    onChange = (event: any) => {
        this.props.onChange(event);
    };

    render() {
        return (
            <Fragment>
                <label className={"font-light text-gray-/500"}>{this.props.label}</label>
                <div className={"flex rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800"}>
                    {this.props.icon !== undefined ? <div className={`rounded-l ml-1 mr-2 text-gray-600`}>
                        <FontAwesomeIcon icon={this.props.icon}/>
                    </div> : ""}
                    <input
                        onChange={this.onChange}
                        className={`flex-1 outline-none bg-gray-800`}
                        type={this.props.type}/>
                </div>
            </Fragment>
        );
    }

};
