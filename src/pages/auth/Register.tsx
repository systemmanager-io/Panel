import React from 'react';
import {Link} from "react-router-dom";

export default class Register extends React.Component<{}, RegisterTypes> {

    public state: RegisterTypes = {
        loginText: "Register",
        loginBarColor: "red",
        loginHidden: false,
        emptyEmail: false,
        emptyPassword: false,
        emptyPasswordConfirmation: false,
    };

     private loginValue: RegisterFormValuesTypes = {
        username: null,
        password: null
    };

    register = (): void => {
        // const emptyString = /^$/;

        // setTimeout(() => this.setState({loginText: "Login successful", loginBarColor: "green"}), 5000);
        // setTimeout(() => this.setState({loginText: "Wrong Credentials", loginHidden: false, loginBarColor: "red"}), 10000);
    }

    handleChange = (name: "password" | "username") => (event: any) => {
        this.loginValue[name] = event.target.value;
    };

    render() {

        let {
            // loginText,
            loginBarColor,
            // emptyUsername,
            // emptyPassword,
            loginHidden
        } = this.state;

        return (
            <div>
                <div className="flex flex-wrap items-center justify-center lg:m-0 mr-4 ml-4 h-screen">
                    <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">

                        <h3 className="text-4xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-light">SystemManager</h3>
                        <h5 className="text-sm text-center mb-2 font-light">Cloud</h5>
                        <div className="text-left">
                            <div
                                className={`bg-gray-900 shadow rounded border-t-4 border-` + loginBarColor + `-700 px-8 pt-6 pb-8 mb-4`}>
                                {/*<h5 className={`text-2xl lg:text-3xl ${!loginHidden ? 'mb-5' : ''} font-light`}>{loginText}</h5>*/}
                                <h5 className={`text-2xl lg:text-3xl font-light`}>Not Available</h5>

                                {/*<div className={`${loginHidden ? 'hidden' : '' } mb-4`}>*/}
                                {/*    <label className={"font-light text-gray-500"}>Username</label><input*/}
                                {/*    onChange={this.handleChange("username")}*/}
                                {/*    className={`rounded shadow p-2 mt-1 ${emptyUsername ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}*/}
                                {/*    type="text"/>*/}
                                {/*    <label className={"font-light text-gray-500"}>Password</label><input*/}
                                {/*    onChange={this.handleChange("password")}*/}
                                {/*    className={`rounded shadow p-2 mt-1 ${emptyPassword ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}*/}
                                {/*    type="password"/>*/}
                                {/*    <button*/}
                                {/*        onClick={this.register.bind(this)}*/}
                                {/*        className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">Log*/}
                                {/*        In*/}
                                {/*    </button>*/}
                                {/*    <Link to="/auth/forgot_password"*/}
                                {/*          className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Forgot*/}
                                {/*        password</Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className={"text-center"}>
                            <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                            <Link to="/"
                                  className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer border-r border-gray-700 font-light px-4 py-2 rounded-l`}>Home</Link>
                            <Link to="/auth/login"
                                  className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded-r`}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
