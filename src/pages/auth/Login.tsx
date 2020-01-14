import React from 'react';
import {Link} from "react-router-dom";

export default class Login extends React.Component<{}, {password: string | null, username: string | null, loginText: string, loginBarColor: string }>  {

    constructor(props: any) {
        super(props);

        this.state = {
            loginText: "Log in",
            loginBarColor: "gray",
            username: null,
            password: null,
        }
    }

    login() {
        if(this.state.password == null  )

        this.setState({loginText: "Logging in...", loginBarColor: "gray"});
        setTimeout(() => {this.setState({loginText: "Wrong Credentials", loginBarColor: "red"})}, 5000);
    }

    handleChange = (name: "password" | "username") => (event: any) => {
        switch(name) {
            // There could be a better solution for this right?
            case "password": this.setState({[name]: event.target.value}); break;
            case "username": this.setState({[name]: event.target.value}); break;
        }
    };

    render() {
        let {
            loginText,
            loginBarColor
        } = this.state;
        console.log(this.state)

        return (
            <div className="flex flex-wrap items-center justify-center lg:m-0 mr-4 ml-4 h-screen">
                <div className="w-full sm:w-6/12 md:w-5/12 lg:w-3/12">

                    <h3 className="text-4xl text-center lg:text-4xl xl:text-5xl mb-2 font-light">SystemManager <span className="text-sm font-light">Cloud</span></h3>
                    <div className="text-left ">
                        <div className={`bg-gray-900 shadow-2xl rounded border-t-4 border-` + loginBarColor + `-700 px-8 pt-6 pb-8 mb-4`}>
                            <h5 className="text-2xl lg:text-3xl mb-5 font-ligth">{loginText}</h5>

                            <div className="mb-4">
                                <label className={"font-light text-gray-500"}>Username</label><input
                                onChange={this.handleChange("username")}
                                className="rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800" type="text"/>
                                <label className={"font-light text-gray-500"}>Password</label><input
                                onChange={this.handleChange("password")}
                                className="rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800" type="password"/>
                                <button
                                    onClick={this.login.bind(this)}
                                    className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">Log
                                    In
                                </button>
                                <Link to="/auth/forgot_password"
                                      className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Forgot
                                    password</Link>
                            </div>
                        </div>
                    </div>
                    <div className={"text-center"}>
                        <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                        <Link to="/"
                              className="bg-gray-900 hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded">Home</Link>
                    </div>
                </div>
            </div>
        );
    }
};
