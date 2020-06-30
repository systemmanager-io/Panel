import React, {Fragment} from "react";

export default class DashboardTitle extends React.Component<{ title: string, subtitle?: string }, any> {


    render() {
        return (
            <Fragment>
                <div className={"px-4 py-1 text-base font-medium text-white focus:outline-none md:flex focus:text-white bg-gray-800 border-gray-700 "}>
                    <h1 className={"text-5xl font-semibold"}>{this.props.title}</h1><span className={"leading-4 text-sm font-light"}>{this.props.subtitle}</span>
                </div>
            </Fragment>
        )
    }
}
