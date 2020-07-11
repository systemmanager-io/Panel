import React from "react";

export default class DashboardSubtitle extends React.Component<{}, any> {


    render() {
        return (
            <p className={"md:inline-block md:align-bottom leading-4 text-sm font-light"}>{this.props.children}</p>
        )
    }
}
