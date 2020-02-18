import React, {Fragment} from "react";

export default class DrawerCategory extends React.Component<{ title: string }, any> {


    render() {
        return (
            <div className={"border-gray-500"}>
                <p className={"font-light text-xs bg-gray-800 py-2 px-4 text-gray-500"}>{this.props.title}</p>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}