import React from 'react';
import AuthDialog from "../../components/ProjectSpecific/AuthDialog";
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
            loginBarColor,
        } = this.state;

        return (
            <AuthDialog authText={"Register"} loginBarColor={loginBarColor}>

                <div className={"w-full mt-4 text-center"}>
                    <Link to="/login"
                          className=" text-gray-600 hover:text-gray-600 font-light cursor-pointer font-light">Or,
                        click here to Log in</Link>
                </div>
            </AuthDialog>

        );
    }
};
