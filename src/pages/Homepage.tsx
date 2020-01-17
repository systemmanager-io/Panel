import React from 'react';
import {Link} from "react-router-dom";

export default class Homepage extends React.Component {

    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h3 className="text-4xl lg:text-5xl mb-5 font-bold">SystemManager Cloud</h3>
                    <Link to="/auth/login" className="bg-gray-900 hover:bg-gray-600 shadow cursor-pointer  px-4 py-2 rounded">Log In</Link>
                    <h3 className="text-3xl mt-10 font-light">Work In Progress</h3>
                    <h3 className="text-2xl font-light">SystemManager Cloud and its components will launch soon.</h3>
                    <p className="text-xs font-light text-gray-600">v0.0.4</p>
                </div>
            </div>
        );
    }
};
