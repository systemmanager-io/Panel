import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";
import {faKey, faUser} from "@fortawesome/free-solid-svg-icons";

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
            <AuthDialog authText={authText} loginBarColor={loginBarColor}>
                <TextField onChange={this.handleChange("username")} icon={faUser} type={"text"} label={"Username"}/>
                <TextField onChange={this.handleChange("password")} icon={faKey} type={"password"} label={"Password"}/>
                <div className={"flex"}>
                    <div className={"flex-1"}>
                        <Button onClick={this.login} type={"primary"}>Log In</Button>
                    </div>
                    <Link to="/forgot_password"
                          className="text-gray-600 hover:text-gray-600 font-light cursor-pointer font-light px-1  py-2 rounded">Forgot
                        password</Link>
                </div>
                <div className={"w-full mt-4 text-center"}>
                    <Link to="/register"
                          className=" text-gray-600 hover:text-gray-600 font-light cursor-pointer font-light">Or,
                        click here to Register</Link>
                </div>
            </AuthDialog>
        );
    }
};
