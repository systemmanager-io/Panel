import React from 'react';
import {Link} from "react-router-dom";

export default class Login extends React.Component {

    render() {
        console.log("login");
        return (
            <div className="flex items-center justify-center lg:m-0 mr-4 ml-4 h-screen">
                <div className="text-center">
                    {/*<FontAwesomeIcon style={{fontSize: "15em"}} className="mb-5" icon={faInfoCircle}/>*/}

                    <h3 className="text-3xl lg:text-4xl xl:text-5xl mb-2 font-bold">SystemManager Cloud</h3>
                    <div className="text-left max-w-full">
                        <div className="bg-gray-900 shadow-2xl rounded border-t-4 border-gray-700 px-8 pt-6 pb-8 mb-4">
                            <h5 className="text-2xl lg:text-3xl mb-5 font-bold">Log in</h5>

                            <div className="mb-4">
                                <label className={"font-light text-gray-500"}>Username</label><input
                                className="rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800" type="text"/>
                                <label className={"font-light text-gray-500"}>Password</label><input
                                className="rounded shadow p-2 mt-1 mb-4 w-full bg-gray-800" type="password"/>
                                <button className="bg-gray-700 hover:bg-gray-600 click:bg-gray-700 cursor-pointer font-bold px-4 py-2 rounded">Log In</button>
                                <Link to="/auth/forgot_password" className="text-gray-700 hover:text-gray-600 font-light cursor-pointer font-light px-4 py-2 rounded">Forgot password</Link>
                            </div>
                        </div>
                    </div>
                    <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                    <Link to="/"
                          className="bg-gray-900 hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded">Home</Link>
                </div>
            </div>
        );
    }
};
