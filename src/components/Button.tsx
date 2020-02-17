import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class Button extends React.Component<{}, LoginTypes> {



    click() {
        console.log("CLICK")
    }
    render() {
        return (
            <Fragment>
                <button
                    onClick={this.click.bind(this)}
                    className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">{this.props.children}
                </button>
            </Fragment>
        );
    }

};
Button.propTypes = {
    // children: PropTypes.element.isRequired
};