import React from "react";

export default class DashboardContent extends React.Component<any, any>{


    render() {
        return (
            <div className={"px-4 py-3"}>
                {this.props.children}
            </div>
        )
    }
}
