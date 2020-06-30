import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";
import {faKey, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Login extends React.Component<{}, LoginTypes> {
    private loginValue: LoginFormValuesTypes = {
        username: null,
        password: null
    };

    public state: LoginTypes = {
        authText: "Please log in to continue",
        loginBarColor: "gray",
        loginHidden: false,
        emptyUsername: false,
        emptyPassword: false,
    };

    public login = (): void => {
        const emptyString = /^$/;
        let valueEmpty: boolean = false;

        // Set the empty warnings to false.
        this.setState({emptyUsername: false, emptyPassword: false});

        // @TODO make better method for this to let it loop and check the stuff.
        if (this.loginValue.username == null || emptyString.test(this.loginValue.username)) {
            this.setState({emptyUsername: true});
            valueEmpty = true;
        }
        if (this.loginValue.password == null || emptyString.test(this.loginValue.password)) {
            this.setState({emptyPassword: true});
            valueEmpty = true;
        }
        if (valueEmpty) return;

        // After checking go on with logging in into the Index.
        this.setState({authText: "Logging you in...", loginHidden: true, loginBarColor: "gray"});

        // This is the result of correct credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({authText: "Welcome %name%", loginBarColor: "green"}), 5000);

        // This is the result of wrong credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({
            authText: "Please log in to continue",
            loginHidden: false,
            loginBarColor: "red"
        }), 10000);
    };

    handleChange = (name: "password" | "username") => (event: any) => {
        this.loginValue[name] = event.target.value;
    };

    render() {

        let {
            authText,
            loginBarColor
        } = this.state;

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                             alt="Workflow"/>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className={"mt-8"}>
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input aria-label="Email address" name="email" type="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Email address"/>
                            </div>
                            <div className="-mt-px">
                                <input aria-label="Password" name="password" type="password" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Password"/>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" type="checkbox"
                                       className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"/>
                                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-white">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm leading-5">
                                <Link to="/forgot_password"
                                   className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
