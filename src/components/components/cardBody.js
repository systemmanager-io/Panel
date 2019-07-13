import * as React from 'react';

export default class CardBody extends React.Component {

    render() {
        return (
            <div className="px-6 py-4">
                {this.props.children}
            </div>
        )
    }
}
