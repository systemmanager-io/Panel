import * as React from 'react';

export default class TableBody extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <tbody className={this.props.className}>
                {this.props.children}
            </tbody>
        )
    }
}
