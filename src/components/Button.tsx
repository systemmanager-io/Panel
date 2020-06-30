import React, {Fragment} from 'react';

export default class Button extends React.Component<{ type: "primary" | "secondary" | "info" | "warning" | "danger", onClick: Function, size?: "xs" | "sm" | "lg" | "xl" }, LoginTypes> {
    colors = {bg: "bg-gray-700", hover: "bg-gray-600", text: "text-white"};
    size = "";

    handleClick = (event: any) => {
        this.props.onClick(event);
    };

    render() {

        switch (this.props.size) {
            case "xs":
                this.size = "text-xs px-2 py-1";
                break;
            case "sm":
                this.size = "px-2 py-1";
                break;
            case "lg":
                this.size = "px-4 py-2";
                break;
            case "xl":
                this.size = "px-8 py-4";
                break;
        }

        switch (this.props.type) {
            case "primary": {
                this.colors = {bg: "bg-gray-700", hover: "bg-gray-600", text: "text-white"};
                break;
            }
            case "secondary": {
                this.colors = {bg: "bg-gray-800", hover: "bg-gray-700", text: "text-white"};
                break;
            }
            case "info": {
                this.colors = {bg: "bg-blue-700", hover: "bg-blue-600", text: "text-white"};
                break;
            }
            case "warning": {
                this.colors = {bg: "bg-yellow-600", hover: "bg-yellow-700", text: "text-black"};
                break;
            }
            case "danger": {
                this.colors = {bg: "bg-red-700", hover: "bg-red-600", text: ""};
                break;
            }
        }
        return (
            <Fragment>
                <button
                    onClick={this.handleClick}
                    className={`px-2 py-1 ${this.colors.bg} hover:${this.colors.hover} click:${this.colors.hover}  ${this.colors.text} text-center ${this.size} cursor-pointer rounded`}>{this.props.children}
                </button>
            </Fragment>
        );
    }

};
