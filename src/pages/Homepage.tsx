import React from 'react';
import {Link} from "react-router-dom";

export default class Homepage extends React.Component {

    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h3 className="text-4xl lg:text-5xl font-light">SystemManager Cloud</h3>
                    <h5 className="text-sm mb-5 font-light">The place for your SystemManager Plugins & Hosting!</h5>
                    <div className={"text-4xl bg-gray-900 px-8 py-4 rounded shadow mb-5 m-4 text-red-700 font-light"}>
                        SystemManager Cloud in development!
                    </div>
                    <Link to="/clients/login"
                          className="bg-gray-900 hover:bg-gray-600 shadow cursor-pointer font-light px-4 border-r border-gray-700 py-2 rounded-l">Log
                        In</Link>
                    <Link to="/clients/register"
                          className="bg-gray-900 hover:bg-gray-600 shadow cursor-pointer font-light px-4 py-2 rounded-r">Register</Link>
                    {/*<h3 className="text-xl mt-10 font-bold">Work In Progress</h3>*/}
                    {/*<h3 className="text-xl font-bold">SystemManager Cloud and its components will launch soon.</h3>*/}
                    <p className="text-xs mt-5 font-light text-gray-600">{process.env.REACT_APP_VERSION}</p>
                </div>
            </div>
        );
    }
};
