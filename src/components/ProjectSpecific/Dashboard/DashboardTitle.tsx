import React, {Fragment} from "react";

export default class DashboardTitle extends React.Component<{ title?: string, subtitle?: string }, any> {


    render() {
        return (
            <Fragment>
                <div
                    className={"flex flex-col md:flex-row font-semibold text-5xl px-4 py-3 text-white"}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}
