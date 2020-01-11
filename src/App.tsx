import React from 'react';
import './css/portfolio.scss';
import './css/tailwind.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

export default class App extends React.Component {

    render() {

        window.addEventListener('deviceLight', function (event) {
            alert(event)
        });

        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    {/*<FontAwesomeIcon style={{fontSize: "15em"}} className="mb-5" icon={faInfoCircle}/>*/}
                    <h3 className="text-5xl mb-5 font-bold">SystemManager Cloud</h3>
                    <h3 className="text-3xl font-light">Work In Progress</h3>
                    <h3 className="text-2xl font-light">SystemManager Cloud and its components will launch soon.</h3>
                    <p className="text-xs font-light text-gray-600">v0.0.0</p>
                </div>
            </div>
        );
    }
};
