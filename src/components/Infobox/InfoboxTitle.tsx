import React, {Fragment} from "react";

export default class InfoboxTitle extends React.Component<any, any> {

    render(): any {
        return (
            <Fragment>
                <h2 className="font-semibold mb-1 text-xl text-left">{this.props.children}</h2>
            </Fragment>
        )

    }
}
