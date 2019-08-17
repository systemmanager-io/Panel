import * as React from 'react';
import '../sass/sidebar.scss'
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import {Fragment} from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
};

class Adminlayout extends React.Component {

    render() {
        return (
            <Fragment>

                <NavBar/>
                {this.props.children}

            </Fragment>
        );
    }
}

export default withStyles(styles)(Adminlayout)