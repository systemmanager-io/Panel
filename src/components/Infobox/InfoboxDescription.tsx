import React, {Fragment} from "react";

export default class InfoboxDescription extends React.Component<any, any> {

    render(): any {
        return (
            <Fragment>
                <h2 className="text-lg text-left">{this.props.children}</h2>
            </Fragment>
        )

    }
}
