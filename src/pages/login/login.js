import React, {Component} from 'react';
import LoginLayout from "../../layouts/LoginLayout";
import {Link} from "react-router-dom";

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
                <div className="bg-grey-lighter h-screen font-sans">
                    <div className="container mx-auto h-full flex justify-center items-center">
                        <div className="w-9/12 lg:w-1/3">
                            <div className="p-8 bg-white mb-6 rounded-lg shadow-lg">
                                <h1 className="font-hairline text-4xl mb-6 font-bold text-center">SystemManager</h1>
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

                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-teal-900 hover:bg-teal text-white font-bold py-2 px-4 rounded">
                                        Login
                                    </button>

                                    <a className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                                       href="#">
                                        Forgot Password?
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </LoginLayout>
        );
    }

    setFormState = evt => {

        this.setState({
            [evt.target.name]: evt.target.value
        });

    };

    passwordForm() {
        this.setState({passwordForm: true});
    };

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

