import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";

export default class Login extends React.Component<{}, LoginTypes> {
    private loginValue: LoginFormValuesTypes = {
        username: null,
        password: null
    };

    public state: LoginTypes = {
        authText: "Log in",
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
        this.setState({authText: "Logging in...", loginHidden: true, loginBarColor: "gray"});

        // This is the result of correct credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({authText: "Login successful", loginBarColor: "green"}), 5000);

        // This is the result of wrong credentials. Might make an enum for this to make life easier
        setTimeout(() => this.setState({
            authText: "Wrong Credentials",
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
            loginBarColor,
            emptyUsername,
            emptyPassword,
            loginHidden
        } = this.state;


        return (
            <AuthDialog authText={"Log In"}>
                <TextField onChange={this.handleChange("username")} empty={false} type={"text"} label={"Username"}/>
                <TextField onChange={this.handleChange("password")} empty={false} type={"password"} label={"Password"}/>
                <Button>Log In</Button>
                <Link to="/auth/forgot_password"
                      className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Forgot
                    password</Link>
            </AuthDialog>
        );
    }
};
