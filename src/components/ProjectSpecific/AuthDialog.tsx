import React, {Fragment} from 'react';


export default class AuthDialog extends React.Component<{ authText: string, loginBarColor: string }, LoginTypes> {
    render() {
        const loginHidden = false;
        return (
            <Fragment>
                <div className={""}>
                    <div className="flex flex-wrap items-center h-full justify-center lg:m-0 mr-4 ml-4">
                        <div className="w-full sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">

                            <h1 className="text-4xl text-center xl:text-5xl mb-4 font-light">SystemManager</h1>
                            <div className="text-left">
                                <div
                                    className={`bg-gray-900 shadow rounded border-t-4 border-` + this.props.loginBarColor + `-700 px-8 pt-6 pb-6 mb-4`}>
                                    <h5 className={`text-2xl lg:text-2xl xl:text-3xl ${!loginHidden ? 'mb-5' : ''} font-light`}>{this.props.authText}</h5>

                                    <div className={`${loginHidden ? 'hidden' : ''}`}>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                            <div className={"text-center"}>
                                <p className="font-light text-gray-600 mb-4 text-xs">Developed by <span
                                    className={"hidden"}>{process.env.REACT_APP_AUTHOR}</span> - Cloud
                                    Panel {process.env.REACT_APP_VERSION}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

};