import * as React from 'react';
import '../sass/sidebar.scss'
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

export default class AdminLayout extends React.Component {

    state = {
        accountIsOpen: false,
        sidebarToggled: false,
        sidebarSettings: true,
    };

    toggle = toToggle => () => {
        switch (toToggle) {
            case('account'):
                this.setState({accountIsOpen: !this.state.accountIsOpen});
                break;
            case('sidebar'):
                this.setState({sidebarToggled: !this.state.sidebarToggled});
                break;
            case('sidebarSettings'):
                this.setState({sidebarSettings: !this.state.sidebarSettings});
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div className="bg-gray-800 h-screen">
                <NavBar/>
                <div className="flex flex-wrap h-full">
                    <div className="md:w-2/12">
                        <Sidebar/>
                    </div>
                    <div className="md:w-10/12 p-4 md:border-t-4 md:border-gray-600">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

