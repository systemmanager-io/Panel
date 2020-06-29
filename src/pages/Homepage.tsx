import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSignInAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import { version } from '../App';

export default class Homepage extends React.Component<{}, HomepageTypes> {
    state = {
        alertHidden: false,
        navOpen: false,
    };

    toggleNav = () => {
        this.setState({navOpen: !this.state.navOpen});
    };

    hideAlert = () => {
        this.setState({alertHidden: true});
    };

    render() {

        const {navOpen, alertHidden} = this.state;

        return (
            <Fragment>
                <div className="justify-center">
                    {/* Unreleased Header */}
                    <div
                        className={`${alertHidden ? "hidden" : ""} sm:text-xl flex items-center bg-gray-900 px-8 py-2 shadow`}>
                        <h1 className={"flex-1 text-red-700"}>SystemManager Cloud in development!<br/><span
                            className={"font-light sm:block text-xs"}>Nothing functional is working. You can see however, what the SystemManager panel will look like by clicking "Login" or "Register".<br/>You can also see tiny bits of the hosting part of systemmanager, like the billing panel and the SystemManager instance manager.</span>
                        </h1>
                        <FontAwesomeIcon onClick={this.hideAlert} className={`justify-center cursor-pointer`}
                                         icon={faTimes}/>
                    </div>
                    {/* Navigation */}
                    <div className="flex shadow px-8 py-2 bg-gray-900">
                        <h1 className={"flex-1 font-light text-2xl"}>SystemManager Cloud </h1>
                        <FontAwesomeIcon onClick={this.toggleNav} className={"self-center sm:hidden"} icon={faBars}/>
                        <div
                            className={`self-center ${navOpen ? "block" : "hidden"} sm:block justify-center align-middle text-center`}>
                            <Link to="/clients/login"
                                  className={"bg-gray-800 text-xs hover:bg-gray-600 shadow cursor-pointer font-light px-4 border-r border-gray-700 py-2 rounded-l"}><FontAwesomeIcon
                                className={"mr-1"} icon={faSignInAlt}/>Log In</Link>
                            <Link to="/clients/register"
                                  className={"bg-gray-800 text-xs hover:bg-gray-600 shadow cursor-pointer font-light px-4 py-2 rounded-r"}>Register</Link>
                        </div>
                    </div>
                </div>


                {/* Body Content */}
                <div className={"flex h-screen justify-center items-center align-middle"}>
                    <div>
                        <h3 className={"text-4xl lg:text-5xl font-light"}>SystemManager Cloud</h3>
                        <h5 className={"text-sm mb-5 font-light"}>The place for your SystemManager Plugins &
                            Hosting!</h5>


                        <p className="text-xs mt-5 font-light text-gray-600">{version}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
};
