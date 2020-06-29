import React, {Fragment} from "react";

export default class DashboardTitle extends React.Component<{ title: string, subtitle?: string }, any> {


    render() {
        return (
            <Fragment>
                <div className={"text-base pb-2 font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700 border-b border-gray-700"}>
                    <p className={"text-5xl font-semibold"}>
                        {this.props.title}
                    </p>
                    <p className={"text-lg font-light"}>
                        {this.props.subtitle}
                    </p>
                </div>
            </Fragment>
        )
    }
}
