import React from "react";

export default class Pill extends React.Component<{className?: any, type: "primary" | "secondary" | "success" | "info" | "warning" | "danger" }, any> {

    colors: {bg: string, hover?: string, text: string} = {bg: "bg-red-700",  text: "white"};

    render() {
        switch (this.props.type) {
            case "primary": {
                this.colors = {bg: "gray-700", text: "white"};
                break;
            }
            case "secondary": {
                this.colors = {bg: "gray-800", text: "white"};
                break;
            }
            case "success": {
                this.colors = {bg: "green-700", text: "white"};
                break;
            }
            case "info": {
                this.colors = {bg: "blue-700", text: "white"};
                break;
            }
            case "warning": {
                this.colors = {bg: "yellow-600", text: "white"};
                break;
            }
            case "danger": {
                this.colors = {bg: "red-700",  text: "white"};
                break;
            }
        }
        return (<span className={`${this.props.className} rounded px-1 shadow bg-${this.colors.bg} text-${this.colors.text} rounded`}>{this.props.children}</span>)
    }
}