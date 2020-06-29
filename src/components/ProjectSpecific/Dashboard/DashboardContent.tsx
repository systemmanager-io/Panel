import React from "react";

export default class DashboardContent extends React.Component<any, any>{


    render() {
        return (
            <div className={""}>
                {this.props.children}
            </div>
        )
    }
}
