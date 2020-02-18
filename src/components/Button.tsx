import React, {Fragment} from 'react';

export default class Button extends React.Component<{ type: "primary" | "secondary" | "info" | "warning" | "danger", onClick: Function }, LoginTypes> {
    colors = {bg: "bg-gray-700", hover: "bg-gray-600", text: "text-white"}

    handleClick = (event: any) => {
        this.props.onClick(event);
    };

    render() {

        switch (this.props.type) {
            case "primary": {
                this.colors = {bg: "bg-gray-700", hover: "bg-gray-600", text: "white"};
                break;
            }
            case "secondary": {
                this.colors = {bg: "bg-gray-800", hover: "bg-gray-700", text: "white"};
                break;
            }
            case "info": {
                this.colors = {bg: "bg-blue-700", hover: "bg-blue-600", text: "white"};
                break;
            }
            case "warning": {
                this.colors = {bg: "bg-yellow-600", hover: "bg-yellow-700", text: "black"};
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
                    className={`${this.colors.bg} hover:${this.colors.hover} click:${this.colors.hover} text-${this.colors.text} cursor-pointer font-bold px-4 py-2 rounded`}>{this.props.children}
                </button>
            </Fragment>
        );
    }

};