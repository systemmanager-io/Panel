import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type props = {
    type: "primary" | "secondary" | "success" | "info" | "warning" | "danger",
    icon?: any,
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
                this.colors = {bg: "yellow-600", iconBg: "yellow-700", text: "black"};
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
                    className={`p-2 m-1 bg-${this.colors.bg} break-words shadow items-center leading-none rounded flex`}
                >
                    {this.props.icon ? <span
                        style={{minWidth: "4rem"}} // @TODO FIX IN LINUX WITH THE TAILWIND CUSTOM CONFIG OPTIONS!!! (BUILT THIS IN WINDOWS, IKR)
                        className={`flex rounded bg-${this.colors.iconBg} uppercase justify-center w-16 items-center h-16 text-xs font-bold mr-3`}><FontAwesomeIcon
                        className={"text-5xl"} icon={this.props.icon}/></span> : ""}


                    <div
                        style={{minHeight: "4rem"}} // @TODO FIX IN LINUX WITH THE TAILWIND CUSTOM CONFIG OPTIONS!!! (BUILT THIS IN WINDOWS, IKR)
                        className={"flex flex-row items-center"}>
                        <div className={"flex-row"}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}