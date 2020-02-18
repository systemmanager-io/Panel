import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type props = {
    type: "primary" | "secondary" | "success" | "info" | "warning" | "danger",
    icon: any,
    title: string,
    desc: string,
}

export default class Infobox extends React.Component<props, {}> {
    colors: { bg: string, iconBg: string, text: string } = {bg: "gray-700", iconBg: "gray-600", text: "white"};

    render() {
        switch (this.props.type) {
            case "primary": {
                this.colors = {bg: "gray-700", iconBg: "gray-600", text: "white"};
                break;
            }
            case "secondary": {
                this.colors = {bg: "gray-900", iconBg: "gray-800", text: "white"};
                break;
            }
            case "success": {
                this.colors = {bg: "green-700", iconBg: "green-600", text: "white"};
                break;
            }
            case "info": {
                this.colors = {bg: "blue-700", iconBg: "blue-600", text: "white"};
                break;
            }
            case "warning": {
                this.colors = {bg: "yellow-500", iconBg: "yellow-600", text: "black"};
                break;
            }
            case "danger": {
                this.colors = {bg: "red-700", iconBg: "red-600", text: "white"};
                break;
            }
        }

        return (
            <Fragment>
                <div
                    className={`p-2 m-1 bg-${this.colors.bg} shadow items-center leading-none rounded flex`}
                >
                        <span
                            className={`flex rounded bg-${this.colors.iconBg} uppercase justify-center w-16 items-center h-16 text-xs font-bold mr-3`}><FontAwesomeIcon
                            className={"text-5xl"} icon={this.props.icon}/></span>


                    <div className={"h-16 flex flex-row items-center"}>
                        <div className={"flex-row"}>
                            <h2 className="font-semibold text-xl text-left">{this.props.title}</h2>
                            <h4 className="text-lg text-left">{this.props.desc}</h4>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}