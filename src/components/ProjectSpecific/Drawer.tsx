import React from 'react';
import {
    faServer,
    faUsersCog,
    faTachometerAlt,
    faList,
    faFileAlt, faMoneyBill, faFileInvoiceDollar
} from '@fortawesome/free-solid-svg-icons';
import Pill from "../Pill";
import DrawerItem from "./DrawerItem";
import DrawerCategory from "./DrawerCategory";


export default class Drawer extends React.Component<{drawerOpen: boolean}, LoginTypes> {
    render() {
        return (
            <div className={`w-64 ${this.props.drawerOpen ? "block" : "hidden"} sm:block sm:w-64 bg-gray-700 shadow`}>
                <div className={"p-4 bg-gray-900"}>
                    <p className={"text-sm"}>Status</p>
                    <p className={"text-sm font-light"}><Pill type={"success"}>12 Ok</Pill> <Pill type={"warning"}>6
                        Warning</Pill> <Pill type={"danger"}>1 Error</Pill></p>
                </div>
                <div>
                    <DrawerCategory title={"General"}>
                        <DrawerItem to={"/clients/dashboard/overview"} icon={faTachometerAlt}>Dashboard</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/servers"} icon={faServer}>Servers</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/categories"} icon={faList}>Categories</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/users"} icon={faFileAlt}>Logs</DrawerItem>
                        <DrawerItem to={"/clients/dashboard/users"} icon={faUsersCog}>Users</DrawerItem>
                    </DrawerCategory>
                    <DrawerCategory title={"Billing"}>
                        <DrawerItem to={"/dashboard"} icon={faFileInvoiceDollar}>Billing</DrawerItem>
                    </DrawerCategory>
                    <DrawerItem to={"/dashboard/users"} icon={faUsersCog}>Outside Category</DrawerItem>
                </div>
            </div>
        );
    }

};