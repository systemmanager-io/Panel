import * as React from 'react';
import '../sass/sidebar.scss'
import NavBar from "../components/NavBar";

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
                <div className="flex flex-wrap">

                    <div>
                        <div className="">
                            {this.props.children}
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

