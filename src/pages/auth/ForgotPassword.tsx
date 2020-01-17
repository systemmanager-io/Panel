import React from 'react';
import {Link} from "react-router-dom";

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
            emptyEmail
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
                                <h5 className={`text-2xl lg:text-3xl ${!loginHidden ? 'mb-5' : ''} font-light`}>{loginText}</h5>
                                <h5 className={`text-sm lg:text- ${!loginHidden ? 'hidden' : ''} font-light`}>If you are registered you should receive a mail with more instructions</h5>

                                <div className={`${loginHidden ? 'hidden' : '' } mb-4`}>
                                    <label className={"font-light text-gray-500"}>Email</label><input
                                    onChange={this.handleChange("email")}
                                    className={`rounded shadow p-2 mt-1 ${emptyEmail ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}
                                    type="text"/>
                                    <button
                                        onClick={this.sendMail}
                                        className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">Send Mail
                                    </button>
                                    <Link to="/auth/login"
                                          className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Login</Link>
                                </div>
                                <div className={`${!loginHidden ? 'hidden' : '' } text-center`}>
                                    <Link to="/auth/login/"
                                    className={` bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded`}>Log in</Link>
                                </div>
                            </div>
                        </div>
                        <div className={"text-center"}>
                            <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                            <Link to="/"
                                  className={`bg-gray-900 hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer border-r border-gray-700 font-light px-4 py-2 rounded-l`}>Home</Link>
                            <Link to="/auth/register/"
                                  className={`bg-gray-900 hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded-r`}>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
