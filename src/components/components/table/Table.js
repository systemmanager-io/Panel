import * as React from 'react';

export default class Table extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <table className="w-full">
                {this.props.children}
            </table>
        )
    }
}
