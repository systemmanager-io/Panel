import * as React from 'react';

export default class TableHead extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <thead className="border-b-2 border-gray-700">
                {this.props.children}
            </thead>
        )
    }
}
