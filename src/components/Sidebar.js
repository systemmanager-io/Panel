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
        console.log(window.location)
        return (
            <div
                className="bg-gray-900 h-full text-center lg:text-left md:border-r-4 w-full md:border-gray-600 w-screen md:w-full">
                <div className="lg:px-2">
                    <ul className="list-reset flex flex-row md:flex-col">
                        <li className="ml-1 mr-1 flex-1">
                            <Link to="dashboard"
                                  className={window.location.pathname === "/dashboard" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 hover:border-pink-500"}>
                                <span>
                                    {/*<FontAwesomeIcon*/}
                                    {/*    className="hidden md:inline"*/}
                                    {/*    icon={faList}/>*/}
                                    <span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li className="ml-1 mr-1 flex-1">
                            <Link to="servers"
                                  className={window.location.pathname === "/servers" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 hover:border-pink-500"}>
                               <span>
                                   {/*<FontAwesomeIcon*/}
                                   {/*className="hidden md:inline"*/}
                                   {/*icon={faServer}/>*/}
                                   <span
                                       className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Servers
                                   </span>
                               </span>
                            </Link>
                        </li>
                        {/*<li className="mr-3 flex-1">*/}
                        {/*    <Link to="tesll"*/}
                        {/*          className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">*/}
                        {/*        <span*/}
                        {/*            className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">Active Link</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="ml-1 mr-1 flex-1">
                            <Link to="log"
                                  className={window.location.pathname === "/log" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 hover:border-pink-500"}>
                                <span>
                                    {/*<FontAwesomeIcon*/}
                                    {/*    className="hidden md:inline text-gray-600 md:text-gray-400"*/}
                                    {/*    icon={faListOl}/>*/}
                                    <span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Log
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li className="ml-1 mr-1 flex-1">
                            <Link to="settings"
                                  className={window.location.pathname === "/settings" ? "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-pink-600 hover:border-pink-500" : "block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 hover:border-pink-500"}>
                                <span>
                                    {/*<FontAwesomeIcon*/}
                                    {/*    className="hidden md:inline"*/}
                                    {/*    icon={faCogs}/>*/}
                                    <span
                                        className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Settings
                                </span>
                                    </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
