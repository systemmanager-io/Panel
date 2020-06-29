import React, {useState, Fragment, ReactComponentElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export default function DrawerDropdown(props: { icon: any, title: string, children: any }): ReactComponentElement<any> {
    const [itemsHidden, setItemsHidden] = useState(true);


    function openDropdown(){
        setItemsHidden(!itemsHidden)
    };

    console.log(itemsHidden);

    return (
        <Fragment>
            <div onClick={openDropdown}
                 className={"cursor-pointer m-1 px-4 py-3 rounded-md text-sm text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"}>
                <div className={"flex"}>
                    <FontAwesomeIcon className={"flex mr-2 w-4 text self-center"} icon={props.icon}/>
                    <p className={"flex-1"}>{props.title}</p>
                    <FontAwesomeIcon className={`transition duration-500 self-center w-4 transform ${itemsHidden ? "rotate-90" : ".rotate-0"}`} icon={faAngleDown}/>
                </div>
            </div>
            <div className={`transition duration-500 ml-4 ${itemsHidden ? "hidden" : "block"}`}>{props.children}</div>
        </Fragment>
    )
}



