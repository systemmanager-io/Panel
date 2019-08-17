import React from 'react';
import {Link} from "react-router-dom";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        tooltipOpen: false
    };

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div
                className="bg-gray-900 h-full lg:text-left md:border-r-4 w-full md:border-gray-600 w-screen md:w-full">
                <div
                    className="block py-1 md:py-3 pl-1 text-center text-gray-800 no-underline">
                                    <span
                                        className="py-1 md:py-0 md:pb-0 text-gray-600 md:text-gray-400 block md:inline-block text-2xl">SystemManager
                                    </span>
                </div>
                <div className="lg:px-2"/>
                <ul className="list-reset flex flex-row md:flex-col px-2">
                    <li className="ml-1 mr-1 flex-1">
                        <Link to="dashboard"
                              className={window.location.pathname === "/dashboard" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline border-b-2 border-gray-800 md:border-gray-900 hover:text-pink-500 hover:border-pink-500"}>
                                    <span
                                        className="py-2 md:py-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard
                                    </span>
                        </Link>
                    </li>
                    <li className="ml-1 mr-1 flex-1">
                        <Link to="servers"
                              className={window.location.pathname === "/servers" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline border-b-2 border-gray-800 md:border-gray-900 hover:text-pink-500 hover:border-pink-500"}>
                                   <span
                                       className="py-2 md:py-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Servers
                                   </span>
                        </Link>
                    </li>
                    <li className="ml-1 mr-1 flex-1">
                        <Link to="log"
                              className={window.location.pathname === "/log" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline border-b-2 border-gray-800 md:border-gray-900 hover:text-pink-500 hover:border-pink-500"}>
                                    <span
                                        className="py-2 md:py-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Log
                                    </span>
                        </Link>
                    </li>
                    <li className="ml-1 mr-1 flex-1">
                        <Link to="settings"
                              className={window.location.pathname === "/settings" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline border-b-2 border-gray-800 md:border-gray-900 hover:text-pink-500 hover:border-pink-500"}>
                                    <span
                                        className="py-2 md:py-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Settings
                                </span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
