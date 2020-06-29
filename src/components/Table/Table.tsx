import React, {Fragment} from 'react';

export default class Table extends React.Component<{}, {}> {
    state = {};

    render() {

        return (
            <Fragment>
                <div className={"w-full p-1 shadow bg-gray-900 rounded-lg"}>
                    <table className={"w-full"}>
                        {this.props.children}
                    </table>
                </div>
            </Fragment>
        );
    }
};
