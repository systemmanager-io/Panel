import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import './sass/app.scss';
import './sass/tailwind.scss';
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/login/login";
import Servers from "./pages/servers";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {deepPurple, purple} from "@material-ui/core/colors";
import Auth from "./components/Auth";


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: deepPurple,
        secondary: purple
    },
    typography: {
        useNextVariants: true,
    },


});

class App extends React.Component {

    state = {
        isLoggedIn: false,
        user: {}
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Auth>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <AdminLayout>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/servers" exact component={Servers}/>
                        <Route path="/settings/servers" exact component={Servers}/>
                        <Route path="/settings/servers/:id" exact component={Servers}/>
                        {/*<Route path="/management" exact component={Management}/>*/}
                    </AdminLayout>
                </Switch>
                </Auth>
            </MuiThemeProvider>
        );
    }
}

export default App;
