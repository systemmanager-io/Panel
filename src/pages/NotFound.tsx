import React from 'react';
import {Link} from "react-router-dom";
import AuthDialog from "../components/ProjectSpecific/AuthDialog";
import TextField from "../components/TextField";
import {faAngleDown, faAngleRight, faEnvelope, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Button from '../components/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Time from "../components/Time";
import Version from "../components/Version";

interface IProps {
}

export default class NotFound extends React.Component<any, any> {


    render() {

        return (
            <div
                className=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <img className="mx-auto mx-auto h-12 w-auto rounded-full"
                             src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                             alt="Profile picture"/>
                    </div>
                    <div className={"mt-8"}>

                        <div className="mt-6 flex">
                            <Link to={"/login"} type="submit"
                                    className="text-center group relative flex-1 justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"absolute bottom-0 left-0 text-gray-600 py-3 px-4"}>
                    <Time /> <Version/>
                </div>
            </div>
        );
    }
};
