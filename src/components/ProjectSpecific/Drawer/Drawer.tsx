import React, {Fragment} from 'react';
import {
    faServer,
    faUsersCog,
    faTachometerAlt,
    faList,
    faFileAlt,
    faUsers,
    faCogs
} from '@fortawesome/free-solid-svg-icons';
import DrawerItem from "./DrawerItem";
import DrawerCategory from "./DrawerCategory";
import DrawerDropdown from './DrawerDropdown';
import {Link} from 'react-router-dom';


export default class Drawer extends React.Component<any, { hidden: boolean }> {
    state = {
        hidden: true
    }

    drawerButton = () => {
        this.setState({hidden: !this.state.hidden})
    }

    render() {
        return (
            <div className={"bg-gray-900"}>
                <div className={"w-full md:w-64 flex p-2 flex-1"}>
                    <h1 className={"text-2xl flex-1 md:w-64 text-white text-center"}>SystemManager</h1>
                    <div className="mr-1 flex md:hidden">
                        <button onClick={this.drawerButton}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                            <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`${this.state.hidden ? "hidden" : "block"} w-full md:block font-semibold min-h-full md:w-64 shadow`}>
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

                        <div className={"flex text-xs text-gray-600 border-t border-gray-800 px-4 py-3"}>
                            <img className={"h-10 w-10 rounded-full mr-2"}
                                 src={"https://genericdevelopment.nl/static/media/profilepicture.66f5dc0f.png"}
                                 alt={"Profile logo"}/>
                            <div className={"self-center"}>
                                <p className={"text-white truncate"}>John Doe</p>
                                <Link to={"/dashboard/profile"} className={"cursor-pointer hover:text-white"}>View
                                    Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};
