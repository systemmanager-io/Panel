import React from 'react';
import {Link} from "react-router-dom";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";
import TextField from "../../components/TextField";
import {faAngleDown, faAngleRight, faEnvelope, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import Button from '../../components/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Time from "../../components/Time";
import Version from "../../components/Version";

interface IProps {
}

export default class Locked extends React.Component<IProps, ForgotPasswordTypes> {

    private loginValues: ForgotPasswordValuesTypes = {
        email: null,
    };

    public state: ForgotPasswordTypes = {
        loginText: "Forgot Password",
        loginBarColor: "gray",
        emptyEmail: false,
        loginHidden: false,
    };

    unlock = (): void => {
        const emptyString = /^$/;
        this.setState({emptyEmail: false});
        let valueEmpty: boolean = false;
        if (this.loginValues.email == null || emptyString.test(this.loginValues.email)) {
            this.setState({emptyEmail: true});
            valueEmpty = true;
        }
        if (valueEmpty) return;
    }

    handleChange = (name: "email") => (event: any) => {
        this.loginValues[name] = event.target.value;
    };

    render() {

        return (
            <div
                className=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <img className="mx-auto h-32 rounded-full w-32"
                             src="https://genericdevelopment.nl/static/media/profilepicture.66f5dc0f.png"
                             alt="Profile picture"/>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            Welcome back,
                        </h2>
                        <h2 className="text-center text-3xl leading-9 font-extrabold text-white">Tigo Middelkoop</h2>
                    </div>
                    <div className={"mt-8"}>
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input aria-label="Password" name="password" type="password" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div className="mt-6 flex">
                            <Link to={"/dashboard/overview"} type="submit"
                                    className="group text-center relative flex-1 justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-l-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Unlock
                            </Link>
                            <Link to={"/login"} type="submit"
                                    className="group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-r-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out">
                                <FontAwesomeIcon className={"self-center text-2xl md:text-xl hover:text-red-700"}
                                                 icon={faSignOutAlt}/>
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
