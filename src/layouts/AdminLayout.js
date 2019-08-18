import * as React from 'react';
import '../sass/sidebar.scss'
import NavBar from "../components/NavBar";
import {Fragment} from "react";
import {withStyles} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";

const styles = theme => {
};

class Adminlayout extends React.Component {

    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <NavBar/>
                {/*<Sidebar/>*/}
                {this.props.children}

            </Fragment>
        );
    }
}

export default withStyles(styles)(Adminlayout)