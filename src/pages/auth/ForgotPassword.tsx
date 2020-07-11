import React from 'react';
import {Link} from "react-router-dom";
import Time from "../../components/Time";
import Version from "../../components/Version";

interface IProps {
}

export default class Login extends React.Component<IProps, ForgotPasswordTypes> {

    private loginValues: ForgotPasswordValuesTypes = {
        email: null,
    };

    public state: ForgotPasswordTypes = {
        loginText: "Forgot Password",
        loginBarColor: "gray",
        emptyEmail: false,
        loginHidden: false,
    };

    sendMail = (): void => {
        const emptyString = /^$/;
        this.setState({emptyEmail: false});
        let valueEmpty: boolean = false;
        if (this.loginValues.email == null || emptyString.test(this.loginValues.email)) {
            this.setState({emptyEmail: true});
            valueEmpty = true;
        }
        if (valueEmpty) return;
        this.setState({loginText: "Email has been send", loginHidden: true, loginBarColor: "green"});
    }

    handleChange = (name: "email") => (event: any) => {
        this.loginValues[name] = event.target.value;
    };

    render() {

        let {
            loginText,
            loginBarColor,
            loginHidden,
        } = this.state;

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        {/*<img className="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg"*/}
                        {/*     alt="Workflow"/>*/}
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            Forgot your password
                        </h2>
                    </div>
                    <div className={"mt-8"}>
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input aria-label="Email address" name="email" type="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Email address"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link to={"/login"} type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Send that mail!
                            </Link>
                        </div>
                        <div className={"w-full mt-2 text-center"}>
                            <Link
                                className={"text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"}
                                to={"/login"}>Or, sign in</Link>
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
