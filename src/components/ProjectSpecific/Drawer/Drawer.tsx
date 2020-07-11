import React from 'react';
import {
    faServer,
    faUsersCog,
    faTachometerAlt,
    faList,
    faFileAlt,
    faUsers,
    faCogs, faSignOutAlt, faLock,
} from '@fortawesome/free-solid-svg-icons';
import DrawerItem from "./DrawerItem";
import DrawerCategory from "./DrawerCategory";
import DrawerDropdown from './DrawerDropdown';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Time from "../../Time";
import Version from "../../Version";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons/faPowerOff";

export default class Drawer extends React.Component<any, { signoutDropdown: boolean, hidden: boolean }> {
    state = {
        hidden: true,
        signoutDropdown: true,
    }

    drawerButton = () => {
        this.setState({hidden: !this.state.hidden})
    }

    signoutDropdownButton = () => {
        this.setState({signoutDropdown: !this.state.signoutDropdown})
    }


    render() {
        return (
            <div className={"md:min-h-screen flex flex-col bg-gray-900"}>
                <div className={"flex w-full md:w-64 items-center p-2"}>
                    <h1 className={"text-2xl flex-1 text-white text-center"}>SystemManager</h1>
                    {/*<div className={"text-2xl p-4 flex-1 text-white"}>*/}
                    {/*    <img className={"hidden md:block md:h-12"} src={"https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"}/>*/}
                    {/*</div>*/}
                    <div className="mr-1 md:hidden">
                        <button onClick={this.drawerButton}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                            <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`md:flex-1 w-full transform ${this.state.hidden ? "hidden" : "block"} md:block font-semibold min-h-full md:w-64`}>
                    <div>
                        <DrawerCategory title={"Servers"}>
                            <DrawerItem to={"/dashboard/overview"} icon={faTachometerAlt}>Dashboard</DrawerItem>
                            <DrawerItem to={"/dashboard/servers"} icon={faServer}>Servers</DrawerItem>
                            <DrawerItem to={"/dashboard/categories"} icon={faList}>Categories</DrawerItem>
                            <DrawerItem to={"/dashboard/logs"} icon={faFileAlt}>Logs</DrawerItem>
                        </DrawerCategory>

                        <DrawerCategory title={"Management"}>
                            <DrawerDropdown icon={faUsersCog} title={"Team"}>
                                <DrawerItem to={"/dashboard/users"} icon={faUsers}>Users</DrawerItem>
                                <DrawerDropdown icon={faUsersCog} title={"Permissions"}>
                                    <DrawerItem to={"/dashboard/permissions/groups"}
                                                icon={faUsersCog}>Roles</DrawerItem>
                                    <DrawerItem to={"/dashboard/permissions/permissions"}
                                                icon={faUsersCog}>Permissions</DrawerItem>
                                </DrawerDropdown>
                            </DrawerDropdown>
                            <DrawerItem to={"/dashboard/settings"} icon={faCogs}>Settings</DrawerItem>
                        </DrawerCategory>
                    </div>
                </div>
                <div
                    className={`${this.state.hidden ? "hidden" : "flex"} md:flex flex-col text-gray-600 border-t border-gray-800 px-4 py-3`}>
                    <Time/>
                    <Version/>
                </div>
                <div
                    className={`${this.state.hidden ? "hidden" : "flex"} md:flex  text-gray-600 border-t border-gray-800 px-4 py-3`}>
                    <div className={"flex flex-1 text-xs"}>
                        <img className={"h-10 w-10 rounded-full mr-2"}
                             src={"https://genericdevelopment.nl/static/media/profilepicture.66f5dc0f.png"}
                             alt={"Profile logo"}/>
                        <div className={"self-center"}>
                            <p className={"text-white truncate"}>Tigo Middelkoop</p>
                            <Link to={"/dashboard/profile"} className={"cursor-pointer hover:text-white"}>View
                                Profile</Link>
                        </div>
                    </div>
                    <div className={"flex"}>
                        {/*<Link className={"self-center px-2 mr-1 py-2 hover:bg-gray-700 hover:text-red-700 rounded"} to={"/lockscreen"}><FontAwesomeIcon*/}
                        {/*    className={"text-2xl md:text-xl hover:text-white"}*/}
                        {/*    icon={faLock}/></Link>*/}
                        {/*<Link className={"self-center px-2 py-2 hover:bg-gray-700 hover:text-red-700 rounded"} to={"/login"}><FontAwesomeIcon*/}
                        {/*    className={"text-2xl md:text-xl"}*/}
                        {/*    icon={faSignOutAlt}/></Link>*/}
                    </div>
                </div>
                <a href={"https://systemmanager.io"} referrerPolicy={"_blank"}
                   className={`${this.state.hidden ? "hidden" : "flex"} md:flex flex-col p-2 border-t border-gray-800 text-xs text-gray-700`}>
                    <div>Powered by SystemManager</div>
                    <div>Made with ❤ by/for System Administrators</div>
                </a>
            </div>
        );
    }

};
