import React from 'react';
import {Link} from "react-router-dom";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";

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
            <AuthDialog authText={"Forgot Password"}>
                <h5 className={`text-sm lg:text- ${!loginHidden ? 'hidden' : ''} font-light`}>If you are registered you
                    should receive a mail with more instructions</h5>

                <div className={`${loginHidden ? 'hidden' : ''} mb-4`}>
                    <label className={"font-light text-gray-500"}>Email</label><input
                    onChange={this.handleChange("email")}
                    className={`rounded shadow p-2 mt-1 ${emptyEmail ? " border-red-700 border" : ""} mb-4 w-full bg-gray-800`}
                    type="text"/>
                    <button
                        onClick={this.sendMail}
                        className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">Send
                        Mail
                    </button>
                    <Link to="/auth/login"
                          className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Login</Link>
                </div>
                <div className={`${!loginHidden ? 'hidden' : ''} text-center`}>
                    <Link to="/auth/login/"
                          className={` bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded`}>Log
                        in</Link>
                </div>
            </AuthDialog>
        );
    }
};
