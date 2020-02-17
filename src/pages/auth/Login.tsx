import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button";

export default class Login extends React.Component<{}, LoginTypes> {
    private loginValue: LoginFormValuesTypes = {
        username: null,
        password: null
    };

    public state: LoginTypes = {
        loginText: "Log in",
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

        // After checking go on with logging in into the Dashboard.
        this.setState({loginText: "Logging in...", loginHidden: true, loginBarColor: "gray"});

        // This is the result of correct credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({loginText: "Login successful", loginBarColor: "green"}), 5000);

        // This is the result of wrong credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({
            loginText: "Wrong Credentials",
            loginHidden: false,
            loginBarColor: "red"
        }), 10000);
    };

    handleChange = (name: "password" | "username") => (event: any) => {
        this.loginValue[name] = event.target.value;
    };

    render() {

        let {
            loginText,
            loginBarColor,
            emptyUsername,
            emptyPassword,
            loginHidden
        } = this.state;

        return (
            <Fragment>
                <div className="flex flex-wrap items-center justify-center lg:m-0 mr-4 ml-4 h-screen">
                    <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">

                        <h1 className="text-4xl text-center xl:text-5xl font-light">SystemManager</h1>
                        <h5 className="text-sm text-center mb-2 font-light">Cloud</h5>
                        <div className="text-left">
                            <div
                                className={`bg-gray-900 shadow rounded border-t-4 border-` + loginBarColor + `-700 px-8 pt-6 pb-8 mb-4`}>
                                <h5 className={`text-2xl lg:text-3xl ${!loginHidden ? 'mb-5' : ''} font-light`}>{loginText}</h5>

                                <div className={`${loginHidden ? 'hidden' : ''} mb-4`}>
                                    <label className={"font-light text-gray-500"}>Username</label><input
                                    onChange={this.handleChange("username")}
                                    className={`rounded shadow p-2 mt-1 ${emptyUsername ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}
                                    type="text"/>
                                    <label className={"font-light text-gray-500"}>Password</label><input
                                    onChange={this.handleChange("password")}
                                    className={`rounded shadow p-2 mt-1 ${emptyPassword ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}
                                    type="password"/>
                                    <Button onClick={this.login.bind(this)}></Button>
                                    <Link to="/auth/forgot_password"
                                          className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Forgot
                                        password</Link>
                                </div>
                            </div>
                        </div>
                        <div className={"text-center"}>
                            <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                            <Link to="/"
                                  className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer border-r border-gray-700 font-light px-4 py-2 rounded-l`}>Home</Link>
                            <Link to="/auth/register/"
                                  className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded-r`}>Register</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};
