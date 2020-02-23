import React from 'react';
import {
    faServer,
    faUsersCog,
    faTachometerAlt,
    faList,
    faFileAlt,
    faFileInvoiceDollar, faLayerGroup, faCodeBranch, faUsers, faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import Pill from "../../Pill";
import DrawerItem from "./DrawerItem";
import DrawerCategory from "./DrawerCategory";
import DrawerDropdown from './DrawerDropdown';
import DrawerFooter from "./DrawerFooter";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {cloudDebug} from "../../../App";


export default class Drawer extends React.Component<{ drawerOpen: boolean }, LoginTypes> {
    render() {
        return (
            <div
                className={`w-64 ${this.props.drawerOpen ? "block" : "hidden"} sm:block min-h-full sm:w-64 bg-gray-700 shadow`}>
                <div className={"p-4 bg-gray-900"}>
                    <div className={"flex text-sm font-mono truncate mb-2"}>
                        <img className={"self-center h-12 w-12 rounded-full border border-gray-600 mr-2"}
                             src={"https://genericdevelopment.nl/static/media/photo.22ca8cd3.jpg"} alt={"Organization Logo"}/>
                        <div className={"self-center"}>
                            <p className={"text-xs"}>Organization: </p>
                            <p onClick={() => cloudDebug("Click Dropdown")} className={"bg-gray-800  px-2 py-1 cursor-pointer select-none rounded shadow mt-1"}><span className={"mr-1"}>GenericDevelopment</span><FontAwesomeIcon icon={faAngleDown}/></p>
                        </div>
                    </div>
                    <div className={"flex flex-wrap text-sm text-center font-mono"}>
                        <Pill className={"mr-1 mb-1"} type={"success"}>12 OK</Pill>
                        <Pill className={"mr-1 mb-1"} type={"warning"}>6 WARNING</Pill>
                        <Pill className={"mr-1 mb-1"} type={"danger"}>1 CRITICAL</Pill>
                        <Pill className={"mr-1 mb-1"} type={"primary"}>1 UNKNOWN</Pill>
                    </div>
                </div>
                <div>
                    <DrawerCategory title={"General"}>
                        <DrawerItem to={"/clients/dashboard/overview"} icon={faTachometerAlt}>Dashboard</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/servers"} icon={faServer}>Servers</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/categories"} icon={faList}>Categories</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/logs"} icon={faFileAlt}>Logs</DrawerItem>
                    </DrawerCategory>
                    <DrawerCategory title={"User Management"}>
                        <DrawerItem to={"/clients/dashboard/users"} icon={faUsers}>Users</DrawerItem>
                        <DrawerDropdown icon={faUsersCog} title={"Permission Management"}>
                            <DrawerItem to={"/clients/dashboard/permissions/groups"}
                                        icon={faUsersCog}>Roles</DrawerItem>
                            <DrawerItem to={"/clients/dashboard/permissions/permissions"}
                                        icon={faUsersCog}>Permissions</DrawerItem>
                        </DrawerDropdown>
                    </DrawerCategory>
                    <DrawerCategory title={"Instances"}>
                        <DrawerItem to={"/clients/dashboard/instances"} icon={faLayerGroup}>Instances</DrawerItem>
                    </DrawerCategory>
                    <DrawerCategory title={"Billing"}>
                        <DrawerItem to={"/clients/dashboard/billing"} icon={faFileInvoiceDollar}>Billing</DrawerItem>
                    </DrawerCategory>

                    <DrawerFooter icon={faCodeBranch}><span
                        className={"font-light"}>{require('../../../../package.json').version} <Link className={"text-blue-700 hover:underline"} to={"/feedback"}>(Feedback)</Link></span></DrawerFooter>
                </div>
            </div>
        );
    }

};