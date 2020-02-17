import React from 'react';
import {Link} from "react-router-dom";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";

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
            <AuthDialog authText={"Register"}></AuthDialog>

        );
    }
};
