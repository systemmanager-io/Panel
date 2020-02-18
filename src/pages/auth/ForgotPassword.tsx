import React from 'react';
import {Link} from "react-router-dom";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";
import TextField from "../../components/TextField";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Button from '../../components/Button';

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
            <AuthDialog authText={loginText} loginBarColor={loginBarColor}>
                <h5 className={`text-sm lg:text- ${!loginHidden ? 'hidden' : ''} font-light`}>If you are registered you
                    should receive a mail with more instructions</h5>

                <div className={`${loginHidden ? 'hidden' : ''} mb-4`}>
                    <TextField label={"Email"} type={"text"} icon={faEnvelope} onChange={this.handleChange}/>
                    <div className={"flex"}>
                        <div className={"flex-1"}>
                            <Button onClick={this.sendMail} type={"primary"}>Send Password Reset Link</Button>
                        </div>
                        <Link to="/login"
                              className="text-gray-600 hover:text-gray-600 font-light cursor-pointer font-light py-2 px-1 rounded">Login</Link>
                    </div>
                </div>
            </AuthDialog>
        );
    }
};
