import React, {Fragment} from 'react';

export default class TextField extends React.Component<{label: String, type: "password" | "text", onChange: Function, empty?: boolean}, {}> {



    click() {
        console.log("CLICK")
    }
    render() {
        return (
            <Fragment>
                <label className={"font-light text-gray-500"}>{this.props.label}</label>
                <input
                // onChange={this.props.onChange}
                className={`rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800`}
                type={this.props.type}/>
            </Fragment>
        );
    }

};
// Button.propTypes = {
//     children: PropTypes.element.isRequired
// };