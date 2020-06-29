import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export default class DrawerDropdown extends React.Component<{ icon: any, title: string }, { itemsHidden: boolean }> {

    state = {
        itemsHidden: true
    };

    openDropdown = () => {
        this.setState({itemsHidden: !this.state.itemsHidden})
    };


    render(): any {
        const {itemsHidden} = this.state;
        return (
            <Fragment>
                <div onClick={this.openDropdown} className={"cursor-pointer m-1 px-4 py-3 rounded-md text-sm text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"}>
                    <div className={"flex"}>
                        <FontAwesomeIcon className={"flex mr-2 w-4 text self-center"} icon={this.props.icon}/>
                        <p className={"flex-1"}>{this.props.title}</p>
                        <FontAwesomeIcon className={"self-center w-4"} icon={itemsHidden ? faAngleLeft : faAngleDown}/>
                    </div>
                </div>
                <div className={`ml-4 ${itemsHidden ? "hidden" : "block"}`}>{this.props.children}</div>
            </Fragment>
        )
    }
}

