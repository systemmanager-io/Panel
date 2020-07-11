import React from "react";

export default class DashboardSubtitle extends React.Component<{}, any> {


    render() {
        return (
            <div className={"ml-2 flex flex-col-reverse leading-4 text-sm font-light"}>
                <p className={""}>{this.props.children}</p>
            </div>
        )
    }
}
