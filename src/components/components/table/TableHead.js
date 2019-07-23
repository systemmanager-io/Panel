import * as React from 'react';

export default class TableHead extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <th className={this.props.className + " flex-1 text-left"} style={this.props.style}>
                {this.props.children}
            </th>
        )
    }
}
