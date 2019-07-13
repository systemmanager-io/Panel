import React from 'react';
import {Link} from "react-router-dom";

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            accountIsOpen: false
        };
    }

    toggle() {
        this.setState({
            accountIsOpen: !this.state.accountIsOpen  // navbar collapse
        });
    }

    render() {
        return (
            <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-3">
                <div className="flex items-center flex-shrink-0 text-xl text-white mr-6">
                    SystemManager
                </div>
                <div className="block lg:hidden">
                    <Link className="hidden lg:block inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">Profile</Link>
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        {/*<Link*/}
                        {/*   className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">*/}
                        {/*    Docs*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*   className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">*/}
                        {/*    Examples*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*   className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">*/}
                        {/*    Blog*/}
                        {/*</Link>*/}
                    </div>
                    <div>
                        <Link className="hidden lg:block inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">Profile</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
