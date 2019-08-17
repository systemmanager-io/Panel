import * as React from 'react';

export default class Card extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        let color;

        switch (this.props.color) {
            case "green":
                color = "bg-green-600";
                break;
            case "yellow":
                color = "bg-yellow-600";
                break;
            case "red":
                color = "bg-red-600";
                break;
            case "orange":
                color = "bg-orange-600";
                break;
            case "blue":
                color = "bg-blue-600";
                break;
            default:
                color = "bg-gray-900";
                break;
        }

        const className = this.props.className + " " + color + " text-white rounded shadow-lg m-1";
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}
