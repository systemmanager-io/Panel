import React, {Fragment} from 'react';
import {Link} from "react-router-dom";


export default class AuthDialog extends React.Component<{authText: string,}, LoginTypes> {
    render() {
        const loginHidden = false;
        const loginBarColor= "gray";
        return (
            <Fragment>
                <Fragment>
                    <div className="flex flex-wrap items-center justify-center lg:m-0 mr-4 ml-4">
                        <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">

                            <h1 className="text-4xl text-center xl:text-5xl font-light">SystemManager</h1>
                            <p className="text-xs text-center mb-2 font-light">Cloud Panel</p>
                            <div className="text-left">
                                <div
                                    className={`bg-gray-900 shadow rounded border-t-4 border-` + loginBarColor + `-700 px-8 pt-6 pb-8 mb-4`}>
                                    <h5 className={`text-2xl lg:text-3xl ${!loginHidden ? 'mb-5' : ''} font-light`}>{this.props.authText}</h5>

                                    <div className={`${loginHidden ? 'hidden' : ''} mb-4`}>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                            <div className={"text-center"}>
                                <p className="font-light text-gray-600 mb-4 text-xs">Developed by Tigo Middelkoop</p>
                                <Link to="/"
                                      className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer border-gray-700 font-light px-4 py-2 rounded`}
                                >Home</Link>
                                {/*<Link to="/auth/register/"*/}
                                {/*      className={`bg-gray-900 ${loginHidden ? 'hidden' : ''} hover:bg-gray-600 shadow click:bg-gray-700 cursor-pointer font-light px-4 py-2 rounded-r`}>Register</Link>*/}
                            </div>
                        </div>
                    </div>
                </Fragment>
            </Fragment>
    );
    }

};