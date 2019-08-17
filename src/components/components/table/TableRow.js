import * as React from 'react';

export default class TableRow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <tr className={this.props.className}>
                {this.props.children}
            </tr>
        )
    }
}
