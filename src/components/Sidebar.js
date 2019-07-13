import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faList, faListOl, faServer} from "@fortawesome/free-solid-svg-icons";

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
                className="bg-gray-900 h-full md:border-r-4 w-full md:border-gray-600 w-screen md:w-full">
                <div className="lg:px-2">
                    <ul className="list-reset flex flex-row md:flex-col">
                        <li className="mr-3 flex-1">
                            <Link to="dashboard"
                                  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"><FontAwesomeIcon
                                    className="hidden md:inline"
                                    icon={faList}/> Dashboard</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to="servers"
                                  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                               <span
                                   className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"><FontAwesomeIcon
                                   className="hidden md:inline"
                                   icon={faServer}/> Servers</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to="tesll"
                                  className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">
                                <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Active Link</span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to="log"
                                  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <span><FontAwesomeIcon className="hidden md:inline text-gray-600 md:text-gray-400"
                                                       icon={faListOl}/> <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Log</span></span>
                            </Link>
                        </li>
                        <li className="mr-3 flex-1">
                            <Link to="settings"
                                  className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <span
                                    className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block"><FontAwesomeIcon
                                    className="hidden md:inline"
                                    icon={faCogs}/> Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
