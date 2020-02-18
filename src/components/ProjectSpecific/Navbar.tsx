import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faBars} from '@fortawesome/free-solid-svg-icons';


export default class Navbar extends React.Component<{onDrawerOpen: Function}, {drawerOpen: boolean}> {
    drawerOpen: boolean = false

    openDrawer = () => {
        this.drawerOpen = !this.drawerOpen;
        this.props.onDrawerOpen(!this.drawerOpen);
    };

    render() {
        return (
            <Fragment>
                <div>
                    <div className="flex shadow text-center py-2 m-0 bg-gray-900 sm:text-left">
                        <FontAwesomeIcon className={"block sm:hidden m-2 ml-4"} onClick={this.openDrawer} icon={faBars}/>
                        <div className={"flex flex-1"}>
                            <div className={"flex-1"}><h1 className={"text-2xl flex-1 sm:w-64 text-center"}>SystemManager</h1></div>
                        </div>
                        <FontAwesomeIcon className={"m-2 mr-4"} icon={faUser}/>

                    </div>
                </div>
            </Fragment>
        );
    }

};