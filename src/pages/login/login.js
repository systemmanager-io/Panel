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
                <div className="container mx-auto h-full flex justify-center items-center">
                    <div className="w-1/3">
                        <h1 className="font-hairline bg-teal mb-6 text-center">SystemManager</h1>
                        <div>
                            <div>
                                <label>Email</label>
                                <input type="text" placeholder="Your Username"/>
                                <input
                                    className="bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                                    type="email" placeholder="jane@example.com"/>

                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="Your Password"/>
                            </div>
                            <div>
                                <button>Login</button>
                                <Link to="/forgot_password">Forgot Password?</Link>
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

