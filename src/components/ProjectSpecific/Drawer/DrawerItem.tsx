import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

export default function DrawerItem(props: { icon: any, to: string, children: any}) {
    const active = window.location.pathname == props.to
    return (
        <Link to={props.to}>
        <div className={`${active ? "bg-gray-700 text-white" : "text-gray-600"} m-1 px-4 py-3 rounded-md text-sm  hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}>
            <div className={"flex select-none"}>
                <div className={"mr-2"}>
                    <FontAwesomeIcon icon={props.icon}/>
                </div>
                <p className={"flex-1"}>{props.children}</p></div>
        </div>
    </Link>
    )
}
