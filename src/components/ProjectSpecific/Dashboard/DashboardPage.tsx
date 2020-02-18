import React from "react";

export default class DashboardPage extends React.Component<any, any>{


    render() {
        return (
            <div className={"p-4"}>
                {this.props.children}
            </div>
        )
    }
}