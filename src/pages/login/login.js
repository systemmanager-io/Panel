import React, {Component} from 'react';
import LoginLayout from "../../layouts/LoginLayout";
import {Link} from "react-router-dom";
import Card from "../../components/components/card";

export default class Login extends Component {

    state = {
        passwordForm: false,
        waitingForToken: false,
        username: undefined,
        password: undefined
    };

    render() {
        return (
            <LoginLayout>
                <div className="bg-gray-800 h-screen font-sans">
                    <div className="container mx-auto h-full flex justify-center items-center">
                        <Card className="p-8 mb-6" color="">
                            <h1 className="font-hairline text-4xl mb-6 font-bold text-center">SystemManager<span
                                className="text-base align-text-top">v0.1</span></h1>
                            <div hidden={this.state.waitingForToken}>
                                <div className="mb-4">
                                    <label className="font-bold text-grey-darker block mb-2">Email</label>
                                    <input type="text"
                                           className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                           placeholder="Your Username"/>
                                </div>

                                <div className="mb-4">
                                    <label className="font-bold text-grey-darker block mb-2">Password</label>
                                    <input type="text"
                                           className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                                           placeholder="Your Password"/>
                                </div>
                            </div>

                            <div hidden={!this.state.waitingForToken}>
                                Loading
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    onClick={this.submitLogin.bind(this)}
                                    className="bg-gray-800 hover:bg-teal text-white w-full font-bold py-2 px-4 rounded">
                                    Login
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <Link
                                    disabled={true}
                                    className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                                    to="/forgot_password">
                                    Forgot Password?
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </LoginLayout>
        );
    }

    submitLogin() {

        this.setState({waitingForToken: true});


        const bodyData = [];
        bodyData['email'] = this.state.username;
        bodyData['password'] = this.state.password;
        fetch(process.env.MIX_APP_URL + "/api/auth/login", {
                mode: "cors",
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username,
                    password: this.state.password
                }),
            }
        ).catch(error => console.error(error))
            .then(res => res.json()
                .then(res => {
                    if (res.error === "invalid_credentials" || res.error === "could_not_create_token") {
                        console.log("test");
                        // this.setState({waitingForToken: false});
                        // this.setState({passwordForm: false});
                        this.setState({statusForToken: "danger"});
                    } else if (res.token !== undefined) {
                        console.log(res.token);
                        this.setState({statusForToken: "success"});
                        this.props.history.push('/dashboard')
                    }
                }));

    }
}

