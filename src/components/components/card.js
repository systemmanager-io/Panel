import * as React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="bg-gray-900 text-white rounded overflow-hidden shadow-lg">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
