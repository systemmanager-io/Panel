import React from "react"
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let timeinterval: any;

export default class Time extends React.Component<any, any> {
    state = {
        time: new Date().toLocaleString()
    }

    componentDidMount() {
        timeinterval = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(timeinterval);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div className={this.props.className + " flex"}>
                <FontAwesomeIcon className={"self-center mr-1"} icon={faClock}/>
                <p>{this.state.time}</p>
            </div>
        )
    }
}
