import React from "react";

export default class DashboardPage extends React.Component<any, any>{


    render() {
        return (
            <div className={"mx-4 my-3"}>
                {this.props.children}
            </div>
        )
    }
}
