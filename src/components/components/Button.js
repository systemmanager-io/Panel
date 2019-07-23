import * as React from 'react';
import {Link} from "react-router-dom";

export default class Button extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        let color;

        switch (this.props.color) {
            case "green":
                color = "bg-green-600 hover:border-green-600";
                break;
            case "yellow":
                color = "bg-yellow-600 hover:border-yellow-600";
                break;
            case "red":
                color = "bg-red-600 hover:border-red-600";
                break;
            case "orange":
                color = "bg-orange-600 hover:border-orange-600";
                break;
            case "blue":
                color = "bg-blue-600 hover:border-blue-600";
                break;
            default:
                color = "bg-gray-900 hover:border-gray-900";
                break;
        }

        const className = this.props.className + " " + color + " border border-transparent hover:bg-transparent text-white rounded px-4 py-2 m-1";
        return (
            <Link to="/test`" className={className}>
                {this.props.children}
            </Link>
        )
    }
}
