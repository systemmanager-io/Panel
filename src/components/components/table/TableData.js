import * as React from 'react';

export default class TableData extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <td className={this.props.className + " flex-1 py-2 border-b-2 border-gray-700"}>
                {this.props.children}
            </td>
        )
    }
}
