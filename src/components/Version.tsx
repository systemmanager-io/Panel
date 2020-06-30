import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {version} from "../App";

export default function Version(props: any) {
    return (
        <div className={props.className + " flex"}>
            <FontAwesomeIcon className={"self-center mr-2"} icon={faCodeBranch}/>
            <p>{version}</p>
        </div>
    )
}
