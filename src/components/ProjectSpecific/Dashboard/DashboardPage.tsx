import React from "react";

export default class DashboardPage extends React.Component<any, any>{


    render() {
        return (
            <div className={""}>
                {this.props.children}
            </div>
        )
    }
}
