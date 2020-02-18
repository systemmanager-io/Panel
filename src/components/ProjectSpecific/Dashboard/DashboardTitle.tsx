import React, {Fragment} from "react";

export default class DashboardTitle extends React.Component<{ title: string, subtitle?: string }, any> {


    render() {
        return (
            <Fragment>
                <div className={"pb-2 mb-2 border-gray-700 border-b"}>
                    <p className={"text-5xl font-light"}>
                        {this.props.title}
                    </p>
                    <p className={"text-xl font-light"}>
                        {this.props.subtitle}
                    </p>
                </div>
            </Fragment>
        )
    }
}